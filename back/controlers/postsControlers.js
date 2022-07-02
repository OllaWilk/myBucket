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
  const { name, description, category, location, likeCount } = req.body;

  let emptyFields = [];

  if (!name) {
    emptyFields.push('name');
  }
  if (!description) {
    emptyFields.push('description');
  }
  if (!category) {
    emptyFields.push('category');
  }
  if (!location) {
    emptyFields.push('location');
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'Please fill in all the fields', emptyFields });
  }

  try {
    const post = await Post.create({
      name,
      description,
      category,
      location,
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
