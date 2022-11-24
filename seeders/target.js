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
      "Targets",
      [
        {
          id: 1,
          targetYear: 2019,
          target: 500000000,
          totalStoreOfGroup: 5,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
          CustomerGroupId: 6
        },
        {
          id: 2,
          targetYear: 2020,
          target: 600000000,
          totalStoreOfGroup: 7,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
          CustomerGroupId: 7
        },
        {
          id: 3,
          targetYear: 2021,
          target: 700000000,
          totalStoreOfGroup: 10,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
          CustomerGroupId: 3
        },
        {
          id: 4,
          targetYear: 2022,
          target: 750000000,
          totalStoreOfGroup: 12,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
          CustomerGroupId: 5
        },
        {
          id: 5,
          targetYear: 2020,
          target: 730000000,
          totalStoreOfGroup: 8,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
          CustomerGroupId: 2
        },
        {
          id: 6,
          targetYear: 2021,
          target: 750000000,
          totalStoreOfGroup: 10,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
          CustomerGroupId: 1
        },
        {
          id: 7,
          targetYear: 2022,
          target: 800000000,
          totalStoreOfGroup: 13,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
          CustomerGroupId: 4
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
    await queryInterface.bulkDelete("Targets", null, {});
  },
};
