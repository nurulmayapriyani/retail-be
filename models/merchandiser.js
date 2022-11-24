"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Merchandiser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Merchandiser.hasMany(models.Visit, {
        foreignKey: 'MerchandiserId'
      });
      models.Visit.belongsTo(Merchandiser)
    }
  }
  Merchandiser.init(
    {
      mdVisitSchedule: DataTypes.STRING({
        notNull: true,
      }),
      mdVisitPeriod: DataTypes.INTEGER({
        notNull: true,
      }),
      mdDaySchedule: DataTypes.STRING({
        notNull: true,
      }),
    },
    {
      sequelize,
      modelName: "Merchandiser",
    }
  );
  return Merchandiser;
};
