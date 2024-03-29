import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./Routers/userRouter.js";
import reportRouter from "./Routers/reportRouter.js";
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/users", userRouter);
app.use("/reports", reportRouter);

app.listen(5000, () => {
  // connect to database
  mongoose
    .connect(
      "mongodb+srv://gokhan:gokhan15ekim@webrazziclone.uuj4i.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("connected to db"))
    .catch((error) => console.log(error));
});
