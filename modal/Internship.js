const mongoose = require("mongoose");

const InternshipSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: String, required: true },
  duration: { type: String, required: true },
  image: { type: String, required: false },
  rollno:{type:String,required:false},
  link:{type:String,required:true}
});

module.exports = mongoose.model("Internship", InternshipSchema);
