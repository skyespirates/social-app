import { Schema, model } from "mongoose";
import { customId } from "../utils/index.js";

const postSchema = new Schema(
  {
    _id: {
      type: String,
      default: customId(),
    },
    content: {
      type: String,
      required: true,
    },
    created_by: {
      type: String,
      required: true,
      ref: "User",
    },
    comments: [
      {
        type: String,
        ref: "Comment",
      },
    ],
  },
  { _id: false, timestamps: true }
);

export default model("Post", postSchema);
