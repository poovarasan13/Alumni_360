const mongoose = require("mongoose");

const webinarSchema = new mongoose.Schema({
  rollno: { type: String, required: true },
  webinarname: { type: String, required: true },
  time: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link:{type:String,required:true},
});

const Webinar = mongoose.model("Webinar", webinarSchema,"Webinars");
module.exports = Webinar;
