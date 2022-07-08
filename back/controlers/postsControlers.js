const mongoose = require('mongoose');
const Post = require('../models/postModule');
const User = require('../models/userModule');

// get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch {
    res.status(404).json({ message: 'error.message' });
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
  const { title, description, category, location, image } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push('title');
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
      title,
      description,
      category,
      location,
      image,
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

  try {
    const post = await Post.findOneAndDelete({ _id: id });

    if (!post) {
      return res.status(400).json({ error: 'No such post' });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "can't delete post" });
  }
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

//get posts by user Id

const getUserId = async (req, res) => {
  const userId = req.params.id;

  try {
    const userPosts = await User.findById(userId).populate('posts');
    res.status(200).json({ user: userPosts });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getPosts,
  getSinglePost,
  createPost,
  deletePost,
  updatePost,
  getUserId,
};
