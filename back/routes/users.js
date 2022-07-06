const express = require('express');
const {
  getAllUsers,
  signupUser,
  loginUser,
} = require('../controlers/usersControlers');

const router = express.Router();

router.get('/', getAllUsers);
router.post('/signup', signupUser);
router.post('/login', loginUser);

module.exports = router;
