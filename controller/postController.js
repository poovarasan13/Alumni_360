const Post = require("../modal/Post");

exports.createPost = async (req, res) => {
  try {
    const { rollno, name, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    if (!rollno || !name || !description || !image) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newPost = new Post({ rollno, name, description, image });
    await newPost.save();
    res.status(201).json({ post: newPost });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.listPosts = async (req, res) => {
  const { rollno } = req.params;
  const posts = await Post.find({ rollno });
  res.status(200).json(posts);
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: "Post deleted successfully" });
};
exports.updatePost = async (req, res) => {
    try {
      const { name, description } = req.body;
      const image = req.file ? `/uploads/${req.file.filename}` : null;
  
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
  
      post.name = name;
      post.description = description;
      if (image) {
        post.image = image;
      }
  
      await post.save();
      res.json({ post });
    } catch (error) {
      res.status(500).json({ error: "Failed to update post" });
    }
  };
  