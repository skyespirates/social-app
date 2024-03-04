import readXlsxFile from "read-excel-file/node";
import fs from "fs/promises";
import Ticket from "../models/Ticket.js";
import Activity from "../models/Activity.js";

const uploadExcel = async (req, res) => {
  try {
    const { path } = req.file;
    const { userId } = req.body;

    // read excel file from given path
    readXlsxFile(path).then(async (rows) => {
      // create a new ticket
      const ticket = await Ticket.create({ created_by: userId });

      // mapping data from array of arrays to array of object
      // because insert many accepts parameter with shape array of objects
      const activities = rows.map((row) => ({
        ticket_id: ticket._id,
        date: row[0],
        total_claim: row[1],
        status: row[2],
      }));

      // insert all activities from excel
      const activity = await Activity.insertMany(activities);

      // mapping created activities id for embeed to ticket.activities
      const activity_ids = activity.map((a) => a._id);

      // combine $push and $each to modify ticket.activities
      await Ticket.findByIdAndUpdate(
        ticket._id,
        {
          $push: {
            activities: {
              $each: activity_ids,
            },
          },
        },
        { new: true }
      );
      // delete data from disk after stored to database
      await fs.unlink(path);
      console.log(`File ${path} has been deleted.`);
    });

    res.status(201).json("file uploaded successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};

const getTicket = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const ticket = await Ticket.findById(ticketId)
      .populate("created_by", "email")
      .populate("activities");
    res.status(200).json(ticket);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};

const getTicketByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const tickets = await Ticket.find({ created_by: userId });
    res.status(200).json(tickets);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};

const deleteTicket = async (req, res) => {
  try {
    const { ticketId } = req.params;
    await Ticket.findByIdAndDelete(ticketId);

    res.status(200).json("successfully deleted ticket and its activities");
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};

const uploadPdf = (req, res) => {
  try {
    res.send("pdf");
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};

const uploadImage = (req, res) => {
  try {
    res.send("image");
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};

export default {
  uploadExcel,
  getTicket,
  getTicketByUser,
  deleteTicket,
  uploadPdf,
  uploadImage,
};
