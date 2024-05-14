// dependencies
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require('dotenv')
dotenv.config()

// files
const connectDB = require("./config/db");
const apiRoutes = require("./routes/apiRoutes");
// variables
const app = express();
const PORT = 4000;
const whitelist = [
  "http://localhost:3000/",
  "http://localhost:3000"
];
const corsoptions = {
  origin: function (origin, callback) {
    if (!origin) {
      return callback(null, true);
    }
    if (whitelist.indexOf(origin) !== -1) {
      return callback(null, true);
    } else {
      console.log(whitelist.indexOf(origin));
      return callback(new Error("not allowed by cors"));
    }
  },
};

app.use(cors(corsoptions));
app.use(express.json());
app.use(cookieParser());
app.use(apiRoutes);

connectDB()
app.listen(PORT)