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
      ref: "Post",
    },
    user_id: {
      type: String,
      ref: "User",
    },
    text: {
      type: String,
      required: true,
    },
  },
  { _id: false, timestamps: true }
);

commentSchema.post("save", async function (doc, next) {
  console.log(data);
  next();
});

export default model("Comment", commentSchema);
