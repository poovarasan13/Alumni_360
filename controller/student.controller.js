const Students=require('../modal/Students.js');

const login = async (req, res) => {
   console.log("Login attempt received");
   const { rollno, password } = req.body;
   try {
       const studentData = await Students.findOne({ rollno });
       if (!studentData) {
           return res.status(404).json({ success: false, message: "Student not found" });
       }

       if (studentData.password === password) {
           console.log(studentData);
           return res.status(200).json({ 
               success: true, 
               message: "Login Successfully", 
               name: studentData.name, 
               mobile: studentData.mobile 
           });
       } else {
           return res.status(401).json({ success: false, message: "Incorrect Password" });
       }
   } catch (err) {
       return res.status(500).json({ success: false, message: err.message });
   }
};

module.exports = login;

