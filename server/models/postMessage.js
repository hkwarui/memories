import mongoose from 'mongoose';

// Create a Post Schema
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// Create a post model
const PostMessage = mongoose.model('PostMessage', postSchema);

// Export post model
export default PostMessage;
