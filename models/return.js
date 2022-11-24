"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Return extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  Return.init(
    {
      returnQty: DataTypes.INTEGER({
        notNull: true,
      }),
      returnExcludeVat: DataTypes.INTEGER({
        notNull: true,
      }),
      returnCause: DataTypes.STRING({
        notNull: true,
      }),
      returnEnding: DataTypes.STRING({
        notNull: true,
      }),
    },
    {
      sequelize,
      modelName: "Return",
    }
  );
  return Return;
};
