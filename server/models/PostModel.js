const mongoose = require("mongoose");

const Post = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    postedAt: {
      type: Date,
      required: true,
    },
    owner: {
      type: String,
      required: true
    }
  },
  { timestamps: true },
);

module.exports = mongoose.model("PostSchema", Post);