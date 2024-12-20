const express = require("express")
const UserController = require("../controllers/UserController")
const { authentication } = require("../middleware/authentication")
const router = express.Router()

router.post("/create",UserController.create)
router.post("/login",UserController.login)
router.delete("/logout",authentication,UserController.logout)
router.get("/",UserController.getAll)
router.get("/getCurrentLoggedUser",authentication,UserController.getCurrentLoggedUser)

module.exports = router