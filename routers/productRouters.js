const express = require("express");
const productControllers = require("../controllers/productControllers");

const router = express.Router();

router.get("/", productControllers.getAllProducts);

router.get("/:id", productControllers.getOneProduct);

router.post("/", productControllers.addNewProduct);

router.patch("/:id", productControllers.updateOneProduct);

router.delete("/:id", productControllers.deleteOneProduct);

module.exports = router;
