const Product = require("../models/Product")
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/keys.js')

const ProductController = {
    async create(req, res) {
        try {
            const newProduct = await Product.create(req.body)
            const token = jwt.sign({ _id: user._id }, jwt_secret);

            if (newProduct.tokens.length > 4) newProduct.tokens.shift();
            newProduct.tokens.push(token);

            res.status(201).send({ message: "New product successfully created", newProduct })
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem", error })
        }
    },
    async getAll(req, res) {
        try {
            const products = await Product.find()
            res.send(products)
        } catch (error) {
            console.error(error);
        }
    },
    async getById(req, res) {
        try {
            const product = await Product.findById(req.params._id)
            res.send(product)
        } catch (error) {
            console.error(error);
        }
    },
    async getProductsByName(req, res) {
        try {
            //BUSQUEDA NORMAL CON EXPRESION REGULAR
            //     if (req.params.name.length>20){
            //         return res.status(400).send('Búsqueda demasiado larga')
            //       }        
            //   const name = new RegExp(req.params.name, "i");
            // //   const products = await Product.find({name:name});
            //   const products = await Product.find({name});
            //BUSQUEDA UTILIZANDO ÍNDICE
            const products = await Product.find({
                $text: {
                    $search: req.params.name,
                },
            });
            res.send(products);
        } catch (error) {
            console.log(error);
        }
    },
    async delete(req, res) {
        try {
            const product = await Product.findByIdAndDelete(req.params._id)
            res.send({ message: 'Product deleted', product })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'there was a problem trying to remove the product' })
        }
    },
    async update(req, res) {
        try {
            const product = await Product.findByIdAndUpdate(
                req.params._id, //id del producto que quiero actualizar
                req.body,// el objeto con los datos a actualizar 
                { new: true }// para que el product de la respuesta sea el actualizado
            )
            res.send({ message: "product successfully updated", product });
        } catch (error) {
            console.error(error);
        }
    },

}

module.exports = ProductController