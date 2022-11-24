"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Target extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Target.init(
    {
      targetYear: DataTypes.INTEGER({
        notNull: true,
      }),
      target: DataTypes.INTEGER({
        notNull: true,
      }),
      totalStoreOfGroup: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Target",
    }
  );
  return Target;
};
