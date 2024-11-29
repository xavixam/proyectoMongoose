const express = require("express")
const ProductController = require("../controllers/ProductController")
const router = express.Router()
const { authentication } = require("../middlewares/authentication");

router.get("/",ProductController.getAll)
router.post("/create", authentication, ProductController.create)
router.get("/id/:_id", ProductController.getById)
router.get("/getByName/:name",ProductController.getProductsByName)
router.delete("/id/:_id", authentication, ProductController.delete)
router.put("/id/:_id", authentication, ProductController.update)

module.exports = router