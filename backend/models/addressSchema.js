"use strict";

const mongoose = require("mongoose");

var addressSchema = new mongoose.Schema({
  country: {
    type: String,
    allowNull: false,
    required: [true, "country is required"],
  },
  state: { type: String, allowNull: false },
  city: { type: String, allowNull: false },
  lat: { type: mongoose.Decimal128 },
  lng: { type: mongoose.Decimal128 },
});

module.exports = addressSchema;
