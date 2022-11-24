"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Purchase_Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Purchase_Order.belongsTo({through: "Product_And_Store"})
      // ({through: "Product_And_Store"}).hasOne(Purchase_Order)
    }
  }
  Purchase_Order.init(
    {
      poNo: DataTypes.INTEGER({
        notNull: true,
      }),
      poCreated: DataTypes.DATE({
        notNull: true,
      }),
      poSent: DataTypes.DATE({
        notNull: true,
      }),
      poQty: DataTypes.INTEGER({
        notNull: true,
      }),
      poTotalPrice: DataTypes.INTEGER({
        notNull: true,
      }),
      poDiscount: DataTypes.INTEGER,
      poTotalExcludeVat: DataTypes.INTEGER({
        notNull: true,
      }),
      poVat: DataTypes.INTEGER({
        notNull: true,
      }),
      poTotalIncludeVat: DataTypes.INTEGER({
        notNull: true,
      }),
    },
    {
      sequelize,
      modelName: "Purchase_Order",
    }
  );
  return Purchase_Order;
};
