const mongoose = require("mongoose");

const forumSchema = new mongoose.Schema({
  name: String,
  content: String,
  para: String,
  imgPost: String, // Stores filename
  comments: [
    {
      pName: String,
      pComment: String,
      pImage: String,
    },
  ],
});

module.exports = mongoose.model("Forum", forumSchema);
