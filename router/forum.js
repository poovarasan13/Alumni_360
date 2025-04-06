const express = require("express");
const router = express.Router();
const Forum = require("../modal/Forum");
const multer = require("multer");
const path = require("path");

// 🔧 Multer storage configuration for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// ✅ Get all forum posts
router.get("/", async (req, res) => {
  try {
    const forums = await Forum.find();
    res.json(forums);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch forums" });
  }
});

// ✅ Get a single forum post by ID
router.get("/:id", async (req, res) => {
  try {
    const forum = await Forum.findById(req.params.id);
    if (!forum) return res.status(404).json({ error: "Forum not found" });

    res.json(forum);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch forum" });
  }
});

// ✅ Create a new forum post with image upload
router.post("/", upload.single("imgPost"), async (req, res) => {
  try {
    const { name, content, para } = req.body;

    const newPost = new Forum({
      name,
      content,
      para,
      imgPost: req.file ? req.file.filename : null,
    });

    await newPost.save();
    res.status(201).json({ message: "Post created successfully", newPost });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create post" });
  }
});

// ✅ Add a comment to a specific forum post
router.post("/:id/comments", async (req, res) => {
  const { pName, pComment, pImage } = req.body;

  try {
    const forum = await Forum.findById(req.params.id);
    if (!forum) return res.status(404).json({ message: "Forum not found" });

    forum.comments.push({ pName, pComment, pImage });
    await forum.save();

    res.json(forum); // return the updated forum
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add comment" });
  }
});

module.exports = router;
