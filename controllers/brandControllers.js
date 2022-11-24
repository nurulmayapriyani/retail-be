const db = require("../models");
const Brand = db.Brand;

const getAllBrands = async (req, res) => {
  try {
    const brand = await Brand.findAll();
    res.status(200).send(brand);
  } catch (err) {
    console.log(err);
  }
};

const getOneBrand = async (req, res) => {
  try {
    const brand = await Brand.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(brand[0]);
  } catch (err) {
    console.log(err);
  }
};

const addNewBrand = async (req, res) => {
  try {
    const addBrand = await Brand.create(req.body);
    res.status(200).json({
      message: "Brand Added",
    });
    console.log(addBrand);
  } catch (err) {
    console.log(err);
  }
};

const updateOneBrand = async (req, res) => {
  try {
    const editBrand = await Brand.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    console.log(editBrand);
    res.status(200).json({
      msg: "Brand Updated",
    });
  } catch (err) {
    console.log(err.message);
  }
};

const deleteOneBrand = async (req, res) => {
  try {
    await Brand.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: "Brand Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllBrands,
  getOneBrand,
  addNewBrand,
  updateOneBrand,
  deleteOneBrand,
};
