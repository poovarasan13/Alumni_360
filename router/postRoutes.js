const express = require("express");
const multer = require("multer");
const router = express.Router();
const postController = require("../controller/postController");
const authenticateAlumni = require("../middleware/authenticateAlumni");
const authenticateStudent =require('../middleware/authenticateStudent')
const upload = multer({ dest: "uploads/" });
//alumni
router.post("/create", authenticateAlumni, upload.single("image"), postController.createPost);
router.get("/list/:rollno", authenticateAlumni, postController.listPosts);
router.delete("/delete/:id", authenticateAlumni, postController.deletePost);
router.put("/update/:id", authenticateAlumni, upload.single("image"), postController.updatePost);

//student
router.get("/student/list/:rollno", authenticateStudent, postController.listPosts);
module.exports = router;
