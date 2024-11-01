// models/Comment.js
import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now }, // default to current date if not provided
}, {
  timestamps: true, // automatically create createdAt and updatedAt fields
});

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
