const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");

const express = require("express");

const app = express();
const cors = require("cors");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Import the API routes from the router module
const router = require("./router");

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// Mount the API routes under the "/api" endpoint
app.use("/api", router);
app.use(express.json());
app.use(express.static("./public"));
app.use("public", express.static(path.join(__dirname, "/public")));

express.json();

app.use(cookieParser());

module.exports = app;
