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
      "Stocks",
      [
        {
          id: 1,
          warehouseStock: 120,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
          ProductId: 2,
          CategoryId: 1,
        },
        {
          id: 2,
          warehouseStock: 250,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
          ProductId: 1,
          CategoryId: 1,
        },
        {
          id: 3,
          warehouseStock: 150,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
          ProductId: 4,
          CategoryId: 2,
        },
        {
          id: 4,
          warehouseStock: 110,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
          ProductId: 3,
          CategoryId: 1,
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
    await queryInterface.bulkDelete("Stocks", null, {});
  },
};
