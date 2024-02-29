import { Schema, model } from "mongoose";
import { customId } from "../utils/index.js";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new Schema(
  {
    _id: {
      type: String,
      default: customId(),
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: {
        values: ["staff", "admin", "dev"],
        message: "Invalid role",
      },
      default: "staff",
    },
  },
  { _id: false, timestamps: true }
);

userSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
  saltlen: 12,
});

export default model("User", userSchema);
