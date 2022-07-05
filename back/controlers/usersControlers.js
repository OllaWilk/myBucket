const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/userModule');

const saltRounds = 10;

// get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch {
    res.status(409).json({ message: error.message });
  }
};

const signupUser = async (req, res) => {
  // Filter users. check if user exists

  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: 'User Already Exists. Pleas Login' });
    }
  } catch {
    return res.status(404).json({ message: error.message });
  }

  // Create user.

  try {
    const hash = bcrypt.hashSync(password, saltRounds);

    const user = await User.create({
      name,
      email,
      password: hash,
    });

    // const hash = bcrypt.hashSync(password, saltRounds);

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  signupUser,
};
