const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const webinarController = require("../controller/webinarController");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});
const upload = multer({ storage });


router.post("/create", upload.single("image"), webinarController.createWebinar);
router.get("/list/:rollno", webinarController.listWebinars);
router.get("/list", webinarController.getWebinars);
router.put("/update/:id", upload.single("image"), webinarController.updateWebinar);
router.delete("/delete/:id", webinarController.deleteWebinar);
router.use("/uploads", express.static(path.join(__dirname, "../uploads"))); // Serve images

module.exports = router;
