const express = require("express")
const router = express.Router()
const PostController = require("../controllers/PostController")
const { authentication, isAuthor } = require("../middleware/authentication");

router.get("/",PostController.getAll)
router.post("/create", authentication, PostController.create)
router.get("/id/:_id", PostController.getById)
router.get("/getByName/:name",PostController.getByName)
router.get("/getUserPosts/:_id",PostController.getUserPosts)
router.delete("/id/:_id", authentication,isAuthor, PostController.delete)
router.put("/id/:_id", authentication,isAuthor, PostController.update)
router.put("/like/:_id",authentication,PostController.like)
router.put("/deleteLike/:_id",authentication,PostController.deleteLike)

module.exports = router