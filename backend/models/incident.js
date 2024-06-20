"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const addressSchema = require("./addressSchema");

const Incident = mongoose.model(
  "Incident",
  new mongoose.Schema(
    {
      address: { type: addressSchema, default: () => ({}) },
      age: {
        type: Number,
        min: 15,
        allowNull: false,
        required: [true, "Age is required"],
      },
      identity: { type: String },
      gender: { type: String },
      title: { type: String, allowNull: false },
      message: { type: String, allowNull: false },
      time: { type: Date, allowNull: true },
      typeOfViolence: { type: String },
      reportToPolice: { type: String },
      status: {
        type: String,
        enum: ["live", "pending", "rejected"],
        default: "live",
      },
    },
    { timestamps: true }
  )
);

const doc = new Incident();
doc.address;
module.exports = Incident;
