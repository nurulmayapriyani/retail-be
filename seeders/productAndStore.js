"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    // 20221014124634-customerGroup
    await queryInterface.bulkInsert(
      "Product_And_Stores",
      [
        {
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
          CustomerStoreId: 2,
          ProductId: 4,
        },
        {
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
          CustomerStoreId: 4,
          ProductId: 2,
        },
        {
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
          CustomerStoreId: 1,
          ProductId: 3,
        },
        {
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
          CustomerStoreId: 5,
          ProductId: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Product_And_Stores", null, {});
  },
};
