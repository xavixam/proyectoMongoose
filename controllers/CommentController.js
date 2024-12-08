const Comment = require("../models/Comment")
const Post = require("../models/Post")

const CommentController = {
    async create(req, res) {
        try {
            req.body.userId = req.user._id;
            const comment = await Comment.create({...req.body,
                postId: req.params._id
            })
            const postObjetivo = await Post.findByIdAndUpdate(req.params._id, { $push: { commentIds: comment._id } })

            res.status(201).send({ message: "New comment successfully created", comment })
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem", error })
        }
    },
    async getAll(req, res) {
        try {
            const comments = await Comment.find()
            res.send(comments)
        } catch (error) {
            console.error(error);
        }
    },
    async delete(req, res) {
        try {
            const comment = await Comment.findByIdAndDelete(req.params._id)
            res.send({ message: 'Comment deleted', comment })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'there was a problem trying to remove the comment' })
        }
    },
    async update(req, res) {
        try {
            const comment = await Comment.findByIdAndUpdate(
                req.params._id, //id del producto que quiero actualizar
                req.body,// el objeto con los datos a actualizar 
                { new: true }// para que el comment de la respuesta sea el actualizado
            )
            res.send({ message: "comment successfully updated", comment });
        } catch (error) {
            console.error(error);
        }
    },
}

module.exports = CommentController