import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Report from "../models/reportModel.js";

const router = express.Router();

// localhost:5000/reports 'a yapılan post isteği
router.post("/", async (req, res) => {
  try {
    //console.log(req.body)
    const { title, explanation } = req.body;
    const reportExists = await Report.findOne({ title });
    if (reportExists)
      return res.status(400).json({ message: "Report already exists." });

    const createdReport = await Report.create({
      title,
      explanation,
    });

    return res.status(201).json(createdReport);
  } catch (error) {
    console.log(error);
    return res.json({ message: "create report failed" });
  }
});

// reports
router.get("/", async (req, res) => {
  try {
    //console.log(req.body)
    const reports = await Report.find({});

    return res.status(201).json(reports);
  } catch (error) {
    console.log(error);
    return res.json({ message: "report failed" });
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updatedReports = await Report.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedReports);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deleteReports = await Report.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteReports);
  } catch (err) {
    next(err);
  }
});

export default router;
