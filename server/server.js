import { connect } from "mongoose";
import app from "./app.js";

const PORT = process.env.PORT || 1337;
const DB = process.env.DB;

connect(DB)
  .then(() => {
    app.listen(PORT, () => {
      console.log("connected to database");
      console.log("server listening on port", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
