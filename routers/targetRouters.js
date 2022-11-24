const express = require("express")
const targetControllers = require("../controllers/targetControllers")

const router = express.Router();

router.get("/", targetControllers.getAllTargets);

router.get("/:id", targetControllers.getOneTarget);

router.post("/", targetControllers.addNewTarget);

router.patch("/:id", targetControllers.updateOneTarget);

router.delete("/:id", targetControllers.deleteOneTarget);

module.exports = router;