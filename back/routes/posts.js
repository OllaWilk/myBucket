const express = require('express');
const {
  getPosts,
  getSinglePost,
  createPost,
  deletePost,
  updatePost,
  getUserId,
} = require('../controlers/postsControlers.js');
const auth = require('../middleware/auth.js');

const router = express.Router();

router.get('/', auth, getPosts);
router.get('/:id', auth, getSinglePost);
router.post('/', auth, createPost);
router.delete('/:id', auth, deletePost);
router.patch('/:id', auth, updatePost);
router.get('/user/:id', auth, getUserId);

module.exports = router;
