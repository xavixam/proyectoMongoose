const Post = require('../models/Post');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/keys.js')

const authentication = async(req, res, next) => {
    try {
        const token = req.headers.authorization;
        const payload = jwt.verify(token, jwt_secret);
        const post = await Post.findOne({ _id: payload._id, tokens: token });

        if (!post) {
            return res.status(401).send({ message: 'No estas autorizado' });
        }

        req.post = post;
        next();
        
    } catch (error) {
        console.error(error)
        return res.status(500).send({ error, message: 'Ha habido un problema con el token' })
    }
}
module.exports = { authentication }
