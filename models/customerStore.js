"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer_Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer_Store.belongsToMany(models.Product, {
        through: "Product_And_Store",
      });
      Customer_Store.hasMany(models.Merchandiser, {
        foreignKey: 'CustomerStoreId'
      });
      models.Merchandiser.belongsTo(Customer_Store)
    }
  }
  Customer_Store.init(
    {
      storeName: DataTypes.STRING({
        notNull: true,
      }),
      storeIsActive: DataTypes.BOOLEAN({
        notNull: true,
      }),
    },
    {
      sequelize,
      modelName: "Customer_Store",
    }
  );
  return Customer_Store;
};
