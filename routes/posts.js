const express = require("express")
const PostController = require("../controllers/PostController")
const router = express.Router()
const { authentication } = require("../middleware/authentication");

router.get("/",PostController.getAll)
router.post("/create", authentication, PostController.create)
router.get("/id/:_id", PostController.getById)
router.get("/getByName/:name",PostController.getByName)
router.delete("/id/:_id", authentication, PostController.delete)
router.put("/id/:_id", authentication, PostController.update)
router.put("/like/:_id",authentication,PostController.like)
router.put("/deleteLike/:_id",authentication,PostController.deleteLike)

module.exports = router