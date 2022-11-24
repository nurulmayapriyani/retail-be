const express = require("express");
const productAndStoreControllers = require("../controllers/productAndStoreControllers");

const router = express.Router();

router.get("/", productAndStoreControllers.getAllProductsAndStores);

router.get("/:id", productAndStoreControllers.getOneProductsAndStores);

router.post("/", productAndStoreControllers.addNewProductsAndStores);

router.patch("/:id", productAndStoreControllers.updateOneProductsAndStores);

router.delete("/:id", productAndStoreControllers.deleteOneProductsAndStores);

module.exports = router;
