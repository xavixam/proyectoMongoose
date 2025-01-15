const Post = require("../models/Post")
const User = require("../models/User")
const Comment = require("../models/Comment")

const PostController = {
    async create(req, res) {
        try {
            req.body.userId = req.user._id;
            const post = await Post.create(req.body)

            res.status(201).send({ message: "New post successfully created", post })
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem", error })
        }
    },
    async getAll(req, res) {
        try {
            const posts = await Post.find()
                .populate("userId") // Popular los datos del usuario
                .populate("commentIds"); // Popular los comentarios
            res.send(posts);
        } catch (error) {
            console.error(error);
        }
    },
    async getById(req, res) {
        try {
            const post = await Post.findById(req.params._id)
            .populate("userId") // Popular los datos del usuario
            .populate("commentIds"); // Popular los comentarios
            res.send(post)
        } catch (error) {
            console.error(error);
        }
    },
    async getByName(req, res) {
        try {
            const posts = await Post.find({
                $text: {
                    $search: req.params.name,
                },
            });
            res.send(posts);
        } catch (error) {
            console.log(error);
        }
    },
    async delete(req, res) {
        try {
            const post = await Post.findByIdAndDelete(req.params._id)
            res.send({ message: 'Post deleted', post })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'there was a problem trying to remove the post' })
        }
    },
    async update(req, res) {
        try {
            const post = await Post.findByIdAndUpdate(
                req.params._id, //id del Post que quiero actualizar
                req.body,// el objeto con los datos a actualizar 
                { new: true }// para que el post de la respuesta sea el actualizado
            )
            res.send({ message: "post successfully updated", post });
        } catch (error) {
            console.error(error);
        }
    },
    async like(req, res) {
        try {
            //damos like al producto
            const post = await Post.findByIdAndUpdate(
                req.params._id,
                { $push: { likes: req.user._id } },
                { new: true }
            );
            // añadimos en la lista de deseos el producto al que hemos dado like
            await User.findByIdAndUpdate(
                req.user._id,
                { $push: { likes: req.params._id } },
                { new: true }
            );
            res.send(post);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem with your like" });
        }
    },
    async deleteLike(req, res) {
        try {
            //damos like al producto
            const post = await Post.findByIdAndUpdate(
                req.params._id,
                { $push: { likes: req.user._id } },
                { new: true }
            );
            // añadimos en la lista de deseos el producto al que hemos dado like
            await User.findByIdAndUpdate(
                req.user._id,
                { $pull: { likes: req.params._id } },
                { new: true }
            );
            res.send(post);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem with your like" });
        }
    },
    async getUserPosts(req, res) {
        try {
          const { _id } = req.params; // Obtén el ID del usuario desde los parámetros de la URL

          // Busca los posts relacionados con el usuario especificado y popula los datos del usuario
          const posts = await Post.find({ userId:_id })
            .populate("userId") // Incluye el nombre y correo del usuario

          if (posts.length === 0) {
            return res.status(404).send({ message: "No posts found for this user" });
          }

          res.status(200).send({ 
            message: "Posts retrieved successfully", 
            posts 
          });
        } catch (error) {
          console.error(error);
          res.status(500).send({
            message: "There was a problem fetching the posts",
            error,
          });
        }
      },
}

module.exports = PostController