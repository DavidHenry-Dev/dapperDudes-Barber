import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  // name: { type: String, required: true },
  // email: { type: String, required: true },
  apptDate: { type: Date, required: true },
});

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;