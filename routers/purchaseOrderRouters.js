const express = require("express")
const purchaseOrderControllers = require("../controllers/purchaseOrderController")

const router = express.Router();

router.get("/", purchaseOrderControllers.getAllPurchaseOrders);

router.get("/:id", purchaseOrderControllers.getOnePurchaseOrder);

router.post("/", purchaseOrderControllers.addNewPurchaseOrder);

router.patch("/:id", purchaseOrderControllers.updateOnePurchaseOrder);

router.delete("/:id", purchaseOrderControllers.deleteOnePurchaseOrder);

module.exports = router;