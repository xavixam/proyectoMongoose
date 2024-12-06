const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const PostSchema = new mongoose.Schema({
  title: String,
  body: String,
  likes: [{ type: ObjectId }],
  commentIds: [{ type: ObjectId, ref: "Comment" }],
  userId: { type: ObjectId, ref: 'User' },
}, { timestamps: true });

PostSchema.index({
  title: "text",
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;