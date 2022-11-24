const express = require("express");
const customerStoreControllers = require("../controllers/customerStoreControllers");

const router = express.Router();

router.get("/", customerStoreControllers.getAllStores);

router.get("/:id", customerStoreControllers.getOneStore);

router.post("/", customerStoreControllers.addNewStore);

router.patch("/:id", customerStoreControllers.updateOneStore);

router.delete("/:id", customerStoreControllers.deleteOneStore);

module.exports = router;
