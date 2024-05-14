// variables
const express = require("express");
const app = express();

const postRoutes = require("./postRoutes");

app.use("/posts", postRoutes);

module.exports = app; 