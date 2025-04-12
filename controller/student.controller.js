const UserData=require('../modal/Data.js');
const AlumniDetails=require('../modal/AlumniDetails.js');

const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  console.log("Login attempt received");
  const { roll, password } = req.body;

  try {
      const Data = await UserData.findOne({ rollno: roll });
      console.log(Data);

      if (!Data) {
          return res.status(404).json({ success: false, message: "Student not found" });
      }

      if (Data.alumni === true) {
          return res.status(201).json({ success: false, alumni: true, message: "You are alumni" });
      }
      else if (Data.password === password) {
          console.log(Data);
          
          
          const payload = {
              rollno: Data.rollno,
              name: Data.name,
              role: 'student',
          };
          
   
          const secretKey = process.env.JWT_SECRET ;
          
         
          const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

          return res.status(200).json({
              success: true,
              message: "Login Successfully",
              token: token,
              role:'student',
              student: Data
          });
      } else {
          return res.status(401).json({ success: false, message: "Incorrect Password" });
      }
  } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
  }
};

  const alumnilogin = async (req, res) => {
    console.log("Alumni login attempt received");
    const { roll, password } = req.body;

    try {
        const alumniData = await UserData.findOne({ rollno: roll });

        if (!alumniData) {
            return res.status(404).json({ success: false, message: "Alumni not found" });
        }
        console.log(alumniData)
        if (!alumniData.alumni) {
            return res.status(403).json({ success: false, message: "You are not registered as an alumni" });
        }

        if (alumniData.password !== password) {
            return res.status(401).json({ success: false, message: "Incorrect password" });
        }

   
        let details = await AlumniDetails.findOne({ rollno: roll });

        if (!details) {
            details = new AlumniDetails({
                Name: alumniData.name,
                rollno: alumniData.rollno,
                FieldofWorking: null,
                WorkLocation: null,
                ProfilePhoto: null,
                Gmail: null,
                Linkedin: null,
                CompanyName: null,
            });
            await details.save();
        }

        // Generate token
        const payload = {
            rollno: alumniData.rollno,
            name: alumniData.name,
            role: 'alumni',
        };

        const secretKey = process.env.JWT_SECRET;
        const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

        return res.status(200).json({
            success: true,
            message: "Alumni login successful",
            token,
            role: 'alumni',
            alumni: alumniData,
            details
        });
    } catch (error) {
        console.error("Error in alumni login:", error);
        return res.status(500).json({ success: false, message: "Server error" });
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

