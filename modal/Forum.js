const mongoose = require("mongoose");

const forumSchema = new mongoose.Schema({
  name: String,
  content: String,
  para: String,
  imgPost: String,
  profileImg: String,
  forumType: String,
  username: String,
  rollno: String,
  comments: [
    {
      pName: String,
      pComment: String,
      pImage: String,
    },
  ],
});

module.exports = mongoose.model("Forum", forumSchema);
