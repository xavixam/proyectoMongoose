const Product = require('../models/Product');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/keys.js')

const authentication = async(req, res, next) => {

    try {
        const token = req.headers.authorization;
        const payload = jwt.verify(token, jwt_secret);
        const product = await Product.findOne({ _id: payload._id, tokens: token });

        if (!product) {
            return res.status(401).send({ message: 'No estas autorizado' });
        }

        req.product = product;
        next();
        
    } catch (error) {
        console.error(error)
        return res.status(500).send({ error, message: 'Ha habido un problema con el token' })
    }
}
module.exports = { authentication }
