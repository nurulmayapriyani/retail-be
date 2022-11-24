const express = require("express");
const stockControllers = require("../controllers/stockControllers");

const router = express.Router();

router.get("/", stockControllers.getAllStocks);

router.get("/:id", stockControllers.getOneStock);

router.post("/", stockControllers.addNewStock);

router.patch("/:id", stockControllers.updateOneStock);

router.delete("/:id", stockControllers.deleteOneStock);

module.exports = router;
