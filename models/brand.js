"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      Brand.hasMany(models.Product, {
        foreignKey: 'BrandId'
      });
      models.Product.belongsTo(Brand)
    }
  }

  Brand.init(
    {
      brandName: DataTypes.STRING({
        len: [2, 10],
        notNull: {
          msg: "Name shouldn't be empty",
        },
      }),
      brandEmail: DataTypes.STRING({
        isEmail: true,
        notNull: {
          msg: "Email shouldn't be empty",
        },
      }),
      brandUsername: DataTypes.STRING({
        len: [2, 10],
        notNull: {
          msg: "Username shouldn't be empty",
        },
      }),
      brandPassword: DataTypes.STRING({
        notNull: {
          msg: "Password shouldn't be empty",
        },
      }),
      brandPhone: DataTypes.BIGINT({
        isNumeric: {
          msg: "Please only enter numbers",
        },
        notNull: {
          msg: "Phone shouldn't be empty",
        },
      }),
    },
    {
      sequelize,
      modelName: "Brand",
    }
  );
  return Brand;
};
