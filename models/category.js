"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Product, {
        foreignKey: 'CategoryId'
      });
      models.Product.belongsTo(Category)
      Category.hasMany(models.Stock,{
        foreignKey: 'CategoryId'
      })
      models.Stock.belongsTo(Category)
    }
  }
  Category.init(
    {
      categoryName: DataTypes.STRING({
        notNull: true,
      }),
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
