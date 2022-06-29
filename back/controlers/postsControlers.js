const Post = require('../models/postModule');
const mongoose = require('mongoose');

// get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch {
    res.status(404).json({ message: error.message });
  }
};

// get a single post
const getSinglePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such post' });
  }

  const post = await Post.findById(id);

  if (!post) {
    return res.status(404).json({ error: 'No such post' });
  }

  res.status(200).json(post);
};

// create a new post
const createPost = async (req, res) => {
  const { title, message, author, selectedFile, likeCount } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push('title');
  }
  if (!message) {
    emptyFields.push('message');
  }
  if (!author) {
    emptyFields.push('author');
  }
  if (!selectedFile) {
    emptyFields.push('selectedFile');
  }
  if (!likeCount) {
    emptyFields.push('likeCount');
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'Please fill in all the fields', emptyFields });
  }

  // add to the database
  try {
    const post = await Post.create({
      title,
      message,
      author,
      selectedFile,
      likeCount,
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a post
const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such post' });
  }

  const post = await Post.findOneAndDelete({ _id: id });

  if (!post) {
    return res.status(400).json({ error: 'No such post' });
  }

  res.status(200).json(post);
};

// update a post
const updatePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such post' });
  }

  const post = await Post.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!post) {
    return res.status(400).json({ error: 'No such post' });
  }

  res.status(200).json(post);
};

module.exports = {
  getPosts,
  getSinglePost,
  createPost,
  deletePost,
  updatePost,
};
