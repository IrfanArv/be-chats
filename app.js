require("dotenv").config();
var express = require("express");
var cors = require("cors");
var app = express();
var port = process.env.PORT;
const helmet = require("helmet");
const bodyParser = require("body-parser");
const logger = require("morgan");

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOption));
app.use(helmet());

//Cors
var corsOption = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: ["x-auth-token"],
};

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,  Authorization, x-access-token, x-api-key"
  );
  next();
});
// routes
var accountRoutes = require("./app/routes/account.routes.js");

app.use(accountRoutes);

// Listening
app.get("/", function (req, res) {
  console.log("route / is accessed.");
  res.send("API Chat App");
});

app.use((req, res) =>
  res.status(404).json({
    status: 404,
    message: "Request not found",
  })
);

app.listen(port);

module.exports = app;
