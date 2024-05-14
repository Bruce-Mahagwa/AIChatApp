// dependencies
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// files
const connectDB = require("./config/db");
const apiRoutes = require("./routes/apiRoutes");
// variables
const app = express();
const PORT = 4000;
const whitelist = [
  "https://ai-chat-app-front.vercel.app",
  "https://ai-chat-app-front.vercel.app/"
];
const corsoptions = {
  origin: function (origin, callback) {
    
    if (whitelist.indexOf(origin) !== -1) {
      return callback(null, true);
    } else {
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