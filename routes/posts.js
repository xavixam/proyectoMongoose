const express = require("express")
const router = express.Router()
const PostController = require("../controllers/PostController")
const { authentication, isAuthor } = require("../middleware/authentication");

router.get("/",PostController.getAll)
router.post("/create", authentication, PostController.create)
router.get("/id/:_id", PostController.getById)
router.get("/getByName/:name",PostController.getByName)
router.delete("/id/:_id", authentication,isAuthor, PostController.delete)
router.put("/id/:_id", authentication,isAuthor, PostController.update)

module.exports = router