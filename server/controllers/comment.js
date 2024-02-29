import Comment from "../models/comment.js";
import Post from "../models/post.js";

const createComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    await Post.findByIdAndUpdate(req.body.post_id, {
      $push: { comments: comment._id },
    });
    res.status(201).json(comment);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};
const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({});
    res.status(201).json(comments);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};
const getComment = async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const comment = await Comment.findById(commentId);
    res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};

export default {
  createComment,
  getComments,
  getComment,
};
