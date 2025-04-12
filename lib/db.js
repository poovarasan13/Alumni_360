const mongoose = require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 3000
    });

    console.log("MongoDB Atlas Connected Successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB Atlas:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
