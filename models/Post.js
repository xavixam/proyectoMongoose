const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const PostSchema = new mongoose.Schema({
    title: String,
    body: String,
<<<<<<< HEAD
    likes: [{ type: ObjectId }],
    commentIds: [{type: ObjectId, ref: "Post"}]
=======
    userId:{type:ObjectId,ref:'User'},
>>>>>>> origin/main
}, { timestamps: true });

PostSchema.index({
    name: "text",
    
  });
  
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;