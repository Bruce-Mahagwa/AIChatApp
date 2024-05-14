const mongoose = require("mongoose");


const connectDB = async () => {
  // connects to mongodb
  try {
    const URI = process.env["URI"]
    await mongoose.connect(URI);
    console.log("connected to mongodb");
  } catch (e) {
    console.log("failed to connect to database");
    console.log(e);
    process.exit(1);
  }
};
module.exports = connectDB;