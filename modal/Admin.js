const { Schema, model } = require("mongoose");

const schema=new Schema({
    username:String,
    password:String,
})

const Admin=model("Admin",schema,"Admin");

module.exports=Admin;