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
  const { title, description, category, location, likeCount, image, user } =
    req.body;

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
    const existingUser = await User.findById(user);

    if (!existingUser) {
      return res.status(400).json({ message: 'no such user' });
    }

    const post = await Post.create({
      title,
      description,
      category,
      location,
      likeCount,
      user,
      image,
    });

    const session = await mongoose.startSession();
    session.startTransaction();
    await post.save({ session });
    existingUser.posts.push(post);
    await existingUser.save({ session });
    await session.commitTransaction();

    res.status(200).json({ post });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete a post
const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such post' });
  }

  try {
    const post = await Post.findOneAndDelete({ _id: id }).populate('user');
    await post.user.posts.pull(post);
    await post.user.save();

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
  const { id } = req.params;

  try {
    const userBlogs = await User.findById(id).populate('posts');
    res.status(200).json({ posts: userBlogs });
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
