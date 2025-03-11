const { Schema, model } = require("mongoose");


const schema=new Schema({
    name:{type:String , required:true},
    rollno:{type:String ,required:true},
    mobile:{type:String ,required:true},
    batch:{type:Number,required:true},
    department:{type:String ,required:true},
    password:{type:String ,required:true},
    alumni:{type:Boolean,required:true}
})

const Students=model("Students",schema,"Students");
module.exports=Students;