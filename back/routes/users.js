const express = require('express');
const {
  getAllUsers,
  signupUser,
  createUser,
} = require('../controlers/usersControlers');

const router = express.Router();

router.get('/', getAllUsers);
router.post('/signup', signupUser);

module.exports = router;
