const express = require("express")
const brandControllers = require("../controllers/brandControllers")

const router = express.Router();

router.get("/", brandControllers.getAllBrands);

router.get("/:id", brandControllers.getOneBrand);

router.post("/", brandControllers.addNewBrand);

router.patch("/:id", brandControllers.updateOneBrand);

router.delete("/:id", brandControllers.deleteOneBrand);

module.exports = router;