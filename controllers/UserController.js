const { JWT_SECRET } = require("../config/keys")
const bcrypt = require("bcryptjs");
const User = require("../models/User")
const jwt = require("jsonwebtoken")

const UserController = {
  async create(req, res) {
    try {
      req.body.role = "user"
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        return res.status(400).send({ message: "Todos los campos son obligatorios" });
      }
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const user = await User.create(req.body)
      res.status(201).send({ message: "User successfully created", user })
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "There was a problem", error });
    }
  },
  async login(req, res) {
    try {
      const user = await User.findOne({
        email: req.body.email,
      })
      if (user) {

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
          return res.status(400).send({ message: "There was a problem please verify the fields and try again" })
        }

        const token = jwt.sign({ _id: user._id }, JWT_SECRET);
        if (user.tokens.length > 4) user.tokens.shift();
        user.tokens.push(token);
        await user.save();
        res.send({ message: 'Bienvenid@ ' + user.name, token });
      } else {
        res.send({ message: 'There was a problem please verify the fields and try again' });
      }



    } catch (error) {
      console.error(error);
    }
  },
  async logout(req, res) {
    try {
      await User.findByIdAndUpdate(req.user._id, {
        $pull: { tokens: req.headers.authorization },
      });
      res.send({ message: "Desconectado con éxito" });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Hubo un problema al intentar desconectar al usuario",
      });
    }
  },
  async getAll(req, res) {
    try {
      const users = await User.find()
      res.send(users)
    } catch (error) {
      console.error(error);
    }
  },
  async getCurrentLoggedUser(req, res) {
    try {
      const user = await User.findOne({
        _id: req.user._id,
      })
      console.log(req.user);

      res.send(user)
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "An wild error has appear",
      });
    }
  },
  async logout(req, res) {
    try {
      await User.findByIdAndUpdate(req.user._id, {
        $pull: { tokens: req.headers.authorization },
      });
      res.send({ message: "Desconectado con éxito" });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Hubo un problema al intentar desconectar al usuario",
      });
    }
  },

}


module.exports = UserController