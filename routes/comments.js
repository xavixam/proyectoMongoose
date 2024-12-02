const express = require("express")
const CommentController = require("../controllers/CommentController")
const router = express.Router()

router.get("/",CommentController.getAll)
router.post("/create/:_id", CommentController.create)
router.delete("/id/:_id", CommentController.delete)
router.put("/id/:_id", CommentController.update)

module.exports = router