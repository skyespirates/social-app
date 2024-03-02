import Post from "../models/post.js";
import Comment from "../models/comment.js";

const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({})
      .sort({ createdAt: -1 })
      .populate("created_by", "email");
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};
const getPost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await Post.findById(postId)
      .populate("created_by", "email")
      .populate("comments");
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};

const deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.body.userId;

    const post = await Post.findByIdAndDelete(postId);
    const comment = await Comment.deleteMany({
      created_by: userId,
    });
    res.status(200).json("Post deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};

export default {
  createPost,
  getPosts,
  getPost,
  deletePost,
};
