const { default: mongoose } = require("mongoose")


const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/AlumniConnection",{
            connectTimeoutMS:3000
        });
        console.log("MongoDB Connected Succesfully");
    }
    catch(err)
    {
        console.log("Err in Connecting ",err.message);
        process.exit(1);
    }
}

module.exports=connectDB;