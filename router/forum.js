const express = require("express");
const router = express.Router();
const Forum = require("../modal/Forum");
const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});


const upload = multer({ storage });
const multipleUpload = upload.fields([
  { name: "imgPost", maxCount: 1 },
  { name: "profileImg", maxCount: 1 },
]);


router.get("/", async (req, res) => {
  try {
    const forums = await Forum.find();
    res.json(forums);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch forums" });
  }
});


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


router.post("/", multipleUpload, async (req, res) => {
  try {
    const { name, content, para, forumType, username, rollno ,profileImgPath} = req.body;

    const imgPost = req.files?.imgPost?.[0]?.filename || null;
    const profileImg = profileImgPath || null;

    const newPost = new Forum({
      name,
      content,
      para,
      forumType,
      username,
      rollno,
      imgPost,
      profileImg,
    });

    await newPost.save();
    res.status(201).json({ message: "Post created successfully", newPost });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create post" });
  }
});


router.post("/:id/comments", async (req, res) => {
  const { pName, pComment, pImage } = req.body;

  try {
    const forum = await Forum.findById(req.params.id);
    if (!forum) return res.status(404).json({ message: "Forum not found" });

    forum.comments.push({ pName, pComment, pImage });
    await forum.save();

    res.json(forum);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add comment" });
  }
});

router.get("/type/:forumType", async (req, res) => {
  try {
    const forumType = decodeURIComponent(req.params.forumType); 
    const forums = await Forum.find({ forumType });
    res.json(forums);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch forums by type" });
  }
});
module.exports = router;
