"use strict";

const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const basename = path.basename(__filename);
const db = {};
const config = require("config");
require("dotenv").config();

function replacePlaceholders(configObj) {
  for (const key in configObj) {
    if (typeof configObj[key] === "string") {
      configObj[key] = configObj[key].replace(
        /\$\{(\w+)\}/g,
        (_, v) => process.env[v]
      );
    } else if (typeof configObj[key] === "object") {
      replacePlaceholders(configObj[key]);
    }
  }
}

replacePlaceholders(config);

const mongooseIns = mongoose.connect(config.dbconfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file));
    db[model.modelName] = model;
  });

mongoose.connection.on(
  "error",
  console.error.bind(console, "Unable to connect to Mongo database:")
);
mongoose.connection.once("open", function () {
  console.log("Connected to Mongo database:");
});

module.exports = db;
