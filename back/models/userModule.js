const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    minlenght: 6,
  },
  posts: [{ type: mongoose.Types.ObjectId, ref: 'Post', required: true }],
});

module.exports = mongoose.model('User', userSchema);
