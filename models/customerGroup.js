"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer_Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer_Group.hasMany(models.Customer_Store, {
        foreignKey: 'CustomerGroupId'
      });
      models.Customer_Store.belongsTo(Customer_Group)
      Customer_Group.hasOne(models.Target, {
        foreignKey: 'CustomerGroupId'
      });
      models.Target.belongsTo(Customer_Group)
      // models.Target.findAll({
      //   include: {
      //     model: Customer_Group,
      //   }
      // });
    }
  }
  Customer_Group.init(
    {
      groupName: DataTypes.STRING({
        notNull: true,
      }),
      groupIsReturnable: DataTypes.BOOLEAN({
        notNull: true,
      }),
    },
    {
      sequelize,
      modelName: "Customer_Group",
    }
  );
  return Customer_Group;
};
