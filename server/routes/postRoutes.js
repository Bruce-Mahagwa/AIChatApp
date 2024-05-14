// dependencies
const express = require("express");
// variables
const router = express.Router();
const {createPost, getPosts} = require("../controllers/postController")

router.post("/save-message", createPost)
router.get("/getposts", getPosts);
module.exports = router;