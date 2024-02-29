import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import passport from "passport";
import User from "./models/User.js";

// routes
import users from "./routes/user.js";
import posts from "./routes/post.js";
import comments from "./routes/comment.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/comments", comments);

app.get("/", (req, res) => {
  res.send("hello world");
});

export default app;
