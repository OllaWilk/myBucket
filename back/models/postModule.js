const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      reqired: true,
    },
    cathegory: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);
