const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  rollno: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link:{type:String,required:true},
});

module.exports = mongoose.model("Post", PostSchema,"Post");
