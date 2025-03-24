const UserData=require('../modal/Data.js');
const AlumniDetails=require('../modal/AlumniDetails.js');
const express = require("express");
// const router=express.Router();
const login = async (req, res) => {
   console.log("Login attempt received");
   const { roll, password } = req.body;
   try {
       const Data = await UserData.findOne({ rollno: roll });
       console.log(Data);
       if (!Data) {
           return res.status(404).json({ success: false, message: "Student not found" });
       }
     if(Data.alumni===true)
        {
            return res.status(201).json({success:false,alumni:true,message:"You are alumni"});
        } 
      else if (Data.password === password) {
           console.log(Data);
           return res.status(200).json({ 
               success: true, 
               message: "Login Successfully", 
                student:Data
           });

       }
       else {
           return res.status(401).json({ success: false, message: "Incorrect Password" });
       }
   } catch (err) {
       return res.status(500).json({ success: false, message: err.message });
   }
};
   //    name: Data.name, 
            //    mobile: Data.mobile 
const alumnilogin = async (req, res) => {
    console.log("Login attempt received");
    const { roll, password } = req.body;
    try {
        const { roll, password } = req.body;
    
        // Check if user exists in 'Data' (authentication)
        const a = await UserData.findOne({ rollno: roll });
    
        if (!a) {
          return res.status(401).json({ success: false, user: true, password: false, message: "Invalid credentials" });
      }
      
      const alumni = await UserData.findOne({ rollno: roll ,password });
    
      if (!alumni) {
        return res.status(401).json({ success: false, password:true,user:false,  message: "Invalid credentials" });
    }
        // Check if alumni details exist
        let details = await AlumniDetails.findOne({ rollno: roll });
    
        // If no details exist, create an initial empty entry
        if (!details) {
          details = new AlumniDetails({
            Name: alumni.name,
            rollno: alumni.rollno,
            FieldofWorking: null,
            WorkLocation: null,
            ProfilePhoto: null,
            Gmail: null,
            Linkedin: null,
            CompanyName: null,
          });
          await details.save();
        }
    
        res.json({ success: true, alumni, details });
      } catch (error) {
        console.error("Error in alumni login:", error);
        res.status(500).json({ success: false,message: "Server error" });
      }
 };
 const editalumni = async (req, res) => {
    try {
      console.log("Incoming file:", req.file); // Debugging: Check if file exists
  
      const { rollno, Name, FieldofWorking, WorkLocation, Gmail, CompanyName, Linkedin } = req.body;
      const ProfilePhoto = req.file ? `/uploads/${req.file.filename}` : null;
  
      const updatedAlumni = await AlumniDetails.findOneAndUpdate(
        { rollno },
        { Name, FieldofWorking, WorkLocation, Gmail, CompanyName, Linkedin, ProfilePhoto },
        { new: true }
      );
  
      if (!updatedAlumni) {
        return res.status(404).json({ success: false, message: "Alumni not found" });
      }
  
      res.json({ success: true, alumni: updatedAlumni });
    } catch (error) {
      console.error("Error updating alumni:", error);
      res.status(500).json({ success: false, message: "Error updating alumni data", error });
    }
  };
  
const alumni=async (req, res) => {
  try {
      const alumni = await AlumniDetails.find({});
      res.json({ success: true, alumni });
  } catch (error) {
      console.error("Error fetching alumni details:", error);
      res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {login,alumnilogin,editalumni,alumni};

