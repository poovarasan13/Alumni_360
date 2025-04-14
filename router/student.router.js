const express = require("express");
const multer = require("multer");
const path = require("path");
const {login ,editalumni,alumnilogin,alumni ,updateBatchAlumni}=require( '../controller/student.controller');
const router=express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});

const upload = multer({ storage });

router.post('/login',login);
router.put('/update-alumni', updateBatchAlumni);
router.post('/alumni',alumnilogin);
router.get('/alumni',alumni);
router.put('/editalumni', upload.single("ProfilePhoto"),editalumni);
router.use("/uploads", express.static(path.join(__dirname, "../uploads")));
module.exports=router;


