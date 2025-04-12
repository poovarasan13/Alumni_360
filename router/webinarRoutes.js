const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const webinarController = require("../controller/webinarController");
const authenticateAlumni = require("../middleware/authenticateAlumni");

// Set up Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });


router.post("/create", authenticateAlumni, upload.single("image"), webinarController.createWebinar);
router.get("/list/:rollno", authenticateAlumni, webinarController.listWebinars);
router.get("/list", authenticateAlumni, webinarController.getWebinars);
router.put("/update/:id", authenticateAlumni, upload.single("image"), webinarController.updateWebinar);
router.delete("/delete/:id", authenticateAlumni, webinarController.deleteWebinar);
router.use("/uploads", express.static(path.join(__dirname, "../uploads"))); 

module.exports = router;
