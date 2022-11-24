"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasOne(models.Stock, {
        foreignKey: "ProductId",
      });
      models.Stock.belongsTo(Product);
      Product.belongsToMany(models.Customer_Store, {
        through: "Product_And_Store",
      });
    }
  }
  Product.init(
    {
      productName: DataTypes.STRING({
        notNull: true,
      }),
      productSize: DataTypes.STRING({
        notNull: true,
      }),
      productVolumeInCarton: DataTypes.INTEGER({
        notNull: true,
      }),
      productBarcode: DataTypes.BIGINT({
        notNull: true,
      }),
      productBuyPricePcs: DataTypes.INTEGER({
        notNull: true,
      }),
      productSellPricePcs: DataTypes.INTEGER({
        notNull: true,
      }),
      productSellPriceCtn: DataTypes.INTEGER({
        notNull: true,
      }),
      productIsActive: DataTypes.BOOLEAN({
        notNull: true,
      }),
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
