const express = require("express")
const ProductController = require("../controllers/ProductController")
const router = express.Router()

router.get("/",ProductController.getAll)
router.post("/create",ProductController.create)
router.get("/id/:_id", ProductController.getById)
router.get("/getByName/:name",ProductController.getProductsByName)
router.delete("/id/:_id",ProductController.delete)
router.put("/id/:_id",ProductController.update)

module.exports = router