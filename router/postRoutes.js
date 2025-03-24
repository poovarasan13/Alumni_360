const express = require("express");
const multer = require("multer");
const router = express.Router();
const postController = require("../controller/postController");

const upload = multer({ dest: "uploads/" });

router.post("/create", upload.single("image"), postController.createPost);
router.get("/list/:rollno", postController.listPosts);
router.delete("/delete/:id", postController.deletePost);
router.put("/update/:id", upload.single("image"), postController.updatePost);

module.exports = router;
