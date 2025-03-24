const { Schema, model } = require("mongoose");


const schema=new Schema({
     name:String,
     password:String,
     departement:String,
     batch:Number,
     alumni:Boolean,
     mobile:String,
     rollno:String,
})

const Data=model("Data",schema,"Data");
module.exports=Data;