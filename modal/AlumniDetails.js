const { Schema, model } = require("mongoose");


const schema=new Schema({
     Name:String,
     FieldofWorking:String,
     WorkLocation:String,
     ProfilePhoto:String,
     Gmail:String,
     Linkedin:String,
     rollno:String,
     CompanyName:String

});

const AlumniDetails=model("AlumniDetails",schema,"AlumniDetails")

module.exports=AlumniDetails;
