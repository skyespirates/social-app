import { Schema, model } from "mongoose";
import { customId } from "../utils/index.js";

const commentSchema = new Schema(
  {
    _id: {
      type: String,
      default: customId(),
    },
    post_id: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { _id: false, timestamps: true }
);

export default model("Comment", commentSchema);
