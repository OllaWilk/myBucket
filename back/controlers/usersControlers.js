const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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

// post new users
const signupUser = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  try {
    //check if user exists

    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res
        .status(400)
        .json({ message: 'User Already Exists. Pleas Login' });

    if (password !== confirmPassword)
      return res.status(400).json({ message: 'Passwords do not match' });

    // create new user
    const hash = bcrypt.hashSync(password, saltRounds);

    const user = await User.create({
      name,
      email,
      password: hash,
    });

    const token = jwt.sign({ email: user.email, id: user._id }, 'test', {
      expiresIn: '1h',
    });

    res.status(200).json(user, token);
  } catch (error) {
    return res.status(404).json('Sth went wrong', { message: error.message });
  }
};

// post login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ message: "Couldn't find user by this email" });
    }

    const correctPassword = await bcrypt.compareSync(password, user.password);

    if (!correctPassword) {
      return res.status(400).json({ message: 'Incorrect Password' });
    }

    const token = jwt.sign({ email: user.email, id: user._id }, 'test', {
      expiresIn: '1h',
    });

    res.status(200).json({ message: 'Loged in', token });
  } catch {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
module.exports = {
  getAllUsers,
  signupUser,
  loginUser,
};
