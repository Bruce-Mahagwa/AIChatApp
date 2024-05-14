// files
const PostModel = require("../models/PostModel");
const connectDB = require("../config/db");
// depend

const createPost = async (req, res) => {
  try {
    await connectDB() // connect to database first
    // check for data in the payload
    const chat = req.body.message
    const description = chat.description
    const owner = chat.owner;
    const postedAt = chat.postedAt;
    if (!description || !owner) { 
        // ensure that the user passes in a description text message
        return res.status(404).json({error: "Please fill in all inputs"})
    }
    const post = await PostModel.create({
        description,
        postedAt,
        owner
      });
      return res.status(200).json({post})
  }
  catch(e) {
    console.log(e)
    return res.status(404).json({failure: true})
  }
}

const getPosts = async (req, res) => {
  try {
    await connectDB() // connect to database
    const posts = await PostModel.find({}).sort({"createdAt": 1})
    return res.json({posts})
  }
  catch(e) {
    console.log(e)
  }
}

module.exports = {createPost, getPosts}