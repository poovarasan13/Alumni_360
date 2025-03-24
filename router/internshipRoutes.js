const express = require("express");
const 
router = express.Router();
const multer = require("multer");
const internshipController = require("../controller/internshipController");
const upload = multer({ dest: "uploads/" });

router.post("/create", upload.single("image"), internshipController.createInternship);
router.get("/list/:rollno", internshipController.listInternships);
router.put("/update/:id", upload.single("image"), internshipController.updateInternship);
router.delete("/delete/:id", internshipController.deleteInternship);

module.exports = router;
