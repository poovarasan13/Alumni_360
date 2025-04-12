const express = require("express");
const 
router = express.Router();
const multer = require("multer");
const internshipController = require("../controller/internshipController");
const upload = multer({ dest: "uploads/" });
const authenticateAlumni = require("../middleware/authenticateAlumni");
router.post("/create", authenticateAlumni,upload.single("image"), internshipController.createInternship);
router.get("/list/:rollno", authenticateAlumni,internshipController.listInternships);
router.put("/update/:id", authenticateAlumni,upload.single("image"), internshipController.updateInternship);
router.delete("/delete/:id",authenticateAlumni, internshipController.deleteInternship);

module.exports = router;
