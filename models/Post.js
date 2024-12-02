const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const PostSchema = new mongoose.Schema({
    title: String,
    body: String
}, { timestamps: true });

PostSchema.index({
    name: "text",
    likes: [{ type: ObjectId }],
  });
  
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;