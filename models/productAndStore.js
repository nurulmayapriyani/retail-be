"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product_And_Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product_And_Store.hasOne(
        models.Return
        //   ,
        //   {
        //   foreignKey: 'ProductAndStoreId'
        // }
      );
      models.Return.belongsTo(Product_And_Store);
      Product_And_Store.hasOne(
        models.Purchase_Order
        //   , {
        //   foreignKey: 'ProductAndStoreId'
        // }
      );
      models.Purchase_Order.belongsTo(Product_And_Store);
      Product_And_Store.hasOne(
        models.Promotion
        //   , {
        //   foreignKey: 'ProductAndStoreId'
        // }
      );
      models.Promotion.belongsTo(Product_And_Store);
      Product_And_Store.hasOne(
        models.SOH_Store
        //   , {
        //   foreignKey: 'ProductAndStoreId'
        // }
      );
      models.SOH_Store.belongsTo(Product_And_Store);
      Product_And_Store.hasOne(
        models.Visit
        //   , {
        //   foreignKey: 'ProductAndStoreId'
        // }
      );
      models.Visit.belongsTo(Product_And_Store);
    }
  }
  Product_And_Store.init(
    {},
    {
      sequelize,
      modelName: "Product_And_Store",
    }
  );
  return Product_And_Store;
};
