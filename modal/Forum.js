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
      createAt:{
        type:Date,
        default:Date.now
      }
    },
  ],
});

module.exports = mongoose.model("Forum", forumSchema);
