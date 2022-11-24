const db = require("../models");
const PurchaseOrder = db.Purchase_Order;
const ProductAndStore = db.Product_And_Store;

const getAllPurchaseOrders = async (req, res) => {
  try {
    const po = await PurchaseOrder.findAll({ include: ProductAndStore });
    res.status(200).send(po);
  } catch (err) {
    console.log(err);
  }
};

const getOnePurchaseOrder = async (req, res) => {
  try {
    const po = await PurchaseOrder.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(po[0]);
  } catch (err) {
    console.log(err);
  }
};

const addNewPurchaseOrder = async (req, res) => {
  try {
    const addPurchaseOrder = await PurchaseOrder.create(req.body);
    res.status(200).json({
      message: "Purchase Order Added",
    });
    console.log(addPurchaseOrder);
  } catch (err) {
    console.log(err);
  }
};

const updateOnePurchaseOrder = async (req, res) => {
  try {
    const editPurchaseOrder = await PurchaseOrder.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    console.log(editPurchaseOrder);
    res.status(200).json({
      msg: "Purchase Order Updated",
    });
  } catch (err) {
    console.log(err.message);
  }
};

const deleteOnePurchaseOrder = async (req, res) => {
  try {
    await PurchaseOrder.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: "PurchaseOrder Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllPurchaseOrders,
  getOnePurchaseOrder,
  addNewPurchaseOrder,
  updateOnePurchaseOrder,
  deleteOnePurchaseOrder,
};
