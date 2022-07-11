const express = require('express');
const {
  getPosts,
  getSinglePost,
  createPost,
  deletePost,
  updatePost,
  getUserId,
} = require('../controlers/postsControlers.js');
// const auth = require('../middleware/auth.js');

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getSinglePost);
router.post('/', createPost);
router.delete('/:id', deletePost);
router.patch('/:id', updatePost);
router.get('/user/:id', getUserId);

module.exports = router;
