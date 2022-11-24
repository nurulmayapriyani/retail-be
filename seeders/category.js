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
      "Categories",
      [
        {
          id: 1,
          categoryName: "Quinoa",
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 2,
          categoryName: "Chia Seed",
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
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
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
