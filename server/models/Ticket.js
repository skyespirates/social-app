import { Schema, model } from "mongoose";

const ticketSchema = new Schema({
  created_by: {
    type: String,
    ref: "User",
    default: "4y0c8jov46em",
  },
  activities: [{ type: Schema.Types.ObjectId, ref: "Activity" }],
});

export default model("Ticket", ticketSchema);
