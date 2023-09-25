import express from "express";
import mongoose from "mongoose";
import { PORT, mongodbURI } from "./config.js";

const app = express();
app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("working");
});

mongoose
  .connect(mongodbURI)
  .then(() => {
    console.log("connected to the database");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
