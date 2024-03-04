import { Schema, model } from "mongoose";
import Activity from "./Activity.js";

const ticketSchema = new Schema({
  created_by: {
    type: String,
    ref: "User",
    default: "4y0c8jov46em",
  },
  activities: [{ type: Schema.Types.ObjectId, ref: "Activity" }],
});

ticketSchema.post("findOneAndDelete", async function (ticket) {
  if (ticket.activities.length) {
    await Activity.deleteMany({
      _id: { $in: ticket.activities },
    });
  }
});

export default model("Ticket", ticketSchema);
