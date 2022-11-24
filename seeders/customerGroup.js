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
    await queryInterface.bulkInsert(
      "Customer_Groups",
      [
        {
          id: 1,
          groupName: "Grand Lucky",
          groupIsReturnable: false,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 2,
          groupName: "Foodhall",
          groupIsReturnable: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 3,
          groupName: "Lulu",
          groupIsReturnable: false,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 4,
          groupName: "Market City",
          groupIsReturnable: false,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 5,
          groupName: "Gelael",
          groupIsReturnable: false,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 6,
          groupName: "Ranch Market",
          groupIsReturnable: false,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 7,
          groupName: "Farmers Market",
          groupIsReturnable: false,
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
    await queryInterface.bulkDelete("Customer_Groups", null, {});
  },
};
