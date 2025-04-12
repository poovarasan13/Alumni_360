const Post = require("../modal/Post");
const fs = require("fs");
const path = require("path");

exports.createPost = async (req, res) => {
  try {
    const { rollno, name, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;
    if (req.user.rollno !== rollno) {
      return res.status(403).json({ error: "You are not authorized to create posts for this roll number" });
    }

    if (!rollno || !name || !description || !image) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newPost = new Post({ rollno, name, description, image });
    await newPost.save();
    res.status(201).json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

exports.listPosts = async (req, res) => {
  try {
    const { rollno } = req.params;

    if (!rollno) {
      return res.status(400).json({ error: "Roll number is required!" });
    }
    // if (req.user.rollno !== rollno) {
    //   return res.status(403).json({ error: "You are not authorized to view posts for this roll number" });
    // }

    const posts = await Post.find({ rollno });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (post.rollno !== req.user.rollno) {
      return res.status(403).json({ error: "You are not authorized to delete this post" });
    }
    if (post.image) {
      const imagePath = path.join(__dirname, "..", post.image);
      fs.unlinkSync(imagePath); 
    }

    await Post.findByIdAndDelete(id);
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting post", details: error.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { name, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    if (post.rollno !== req.user.rollno) {
      return res.status(403).json({ error: "You are not authorized to update this post" });
    }

    post.name = name || post.name;
    post.description = description || post.description;

   
    if (image) {
      if (post.image) {
        const imagePath = path.join(__dirname, "..", post.image);
        fs.unlinkSync(imagePath); 
      }
      post.image = image;
    }

    await post.save();
    res.json({ message: "Post updated successfully", post });
  } catch (error) {
    res.status(500).json({ error: "Failed to update post", details: error.message });
  }
};
