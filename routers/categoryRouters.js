const express = require("express")
const categoryRouters = require("../controllers/categoryControllers")

const router = express.Router();

router.get("/", categoryRouters.getAllCategories);

router.get("/:id", categoryRouters.getOneCategory);

router.post("/", categoryRouters.addNewCategory);

router.patch("/:id", categoryRouters.updateOneCategory);

router.delete("/:id", categoryRouters.deleteOneCategory);

module.exports = router;