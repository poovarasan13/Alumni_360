const mongoose = require("mongoose");

const InternshipSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: String, required: true },
  duration: { type: String, required: true },
  image: { type: String, required: false },
  rollno:{type:String,required:false}
});

module.exports = mongoose.model("Internship", InternshipSchema);
