const express = require("express");
const customerGroupControllers = require("../controllers/customerGroupControllers")

const router = express.Router();

router.get("/", customerGroupControllers.getAllGroups);

router.get("/:id", customerGroupControllers.getOneGroup);

router.post("/", customerGroupControllers.addNewGroup);

router.patch("/:id", customerGroupControllers.updateOneGroup);

router.delete("/:id", customerGroupControllers.deleteOneGroup);

module.exports = router;