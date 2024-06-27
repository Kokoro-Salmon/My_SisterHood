const YAML = require("yamljs");
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const config = require("config");
// const bodyParser = require("body-parser");
// const swaggerUI = require("swagger-ui-express");
// const swaggerJsDoc = require("swagger-jsdoc");

// const options = {
//   definition: {
//     openapi: "3.0.3",
//     info: {
//       title: "Sisterhood API",
//       version: "1.0.0",
//       description: "A simple Express APIs",
//     },
//     servers: [
//       {
//         url: "http://localhost:3000",
//       },
//     ],
//   },
//   apis: ["./routes/*.js"],
// };

// const specs = swaggerJsDoc(options);

const indexRouter = require("./routes/index");

const app = express();
const cors = require("cors");
app.use(cors());
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
  console.log("this is not working");
});
app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "dev" ? err : {};

  // send JSON response
  res.status(err.status || 500).json({ error: err.message });
});

module.exports = app;
