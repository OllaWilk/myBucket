const express = require('express');
const {
  getPosts,
  getSinglePost,
  createPost,
  deletePost,
  updatePost,
} = require('../controlers/postsControlers.js');

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getSinglePost);
router.post('/', createPost);
router.delete('/:id', deletePost);
router.patch('/:id', updatePost);

module.exports = router;
