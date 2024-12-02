const express = require("express")
const PostController = require("../controllers/PostController")
const router = express.Router()
const { authentication } = require("../middleware/authentication");

router.get("/",PostController.getAll)
router.post("/create", PostController.create)
router.get("/id/:_id", PostController.getById)
router.get("/getByName/:name",PostController.getByName)
router.delete("/id/:_id", PostController.delete)
router.put("/id/:_id", PostController.update)

module.exports = router