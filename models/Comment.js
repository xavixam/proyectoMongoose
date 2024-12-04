const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const CommentSchema = new mongoose.Schema({
    body: String,
}, { timestamps: true });

CommentSchema.index({
    body: "text",
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    postId: {
        type: ObjectId,
        ref: 'Post'
    },
  });
  
const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;