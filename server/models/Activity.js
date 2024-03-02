import { Schema, model } from "mongoose";

const activitySchema = new Schema({
  ticket_id: Schema.Types.ObjectId,
  date: Date,
  total_claim: Number,
  status: String,
});

export default model("Activity", activitySchema);
