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
      "Customer_Stores",
      [
        {
          id: 1,
          storeName: "Grand Lucky Cinere",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 2,
          storeName: "Grand Lucky Paragon",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 3,
          storeName: "Grand Lucky SCBD",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 4,
          storeName: "Grand Lucky MOI",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 5,
          storeName: "Grand Lucky Sunset",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 6,
          storeName: "Grand Lucky Sanur",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 7,
          storeName: "Grand Lucky PIK",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 8,
          storeName: "Foodhall Plaza Senayan",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 9,
          storeName: "Foodhall Plaza Indonesia",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 10,
          storeName: "Foodhall Grand Indonesia",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 11,
          storeName: "Foodhall Kelapa Gading",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 12,
          storeName: "Foodhall Senayan City",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 13,
          storeName: "Lulu Mall Bekasi",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 14,
          storeName: "Lulu BSD",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 15,
          storeName: "Lulu Sentul",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 16,
          storeName: "Lulu Sawangan",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 17,
          storeName: "Lulu Cimone",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 18,
          storeName: "Lulu Cakung",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 19,
          storeName: "Market City BSD",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 20,
          storeName: "Market City PIK",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 21,
          storeName: "Market City MK",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 22,
          storeName: "Market City Cibubur",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 23,
          storeName: "Gelael M. T. Haryono",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 24,
          storeName: "Gelael M. T. Haryono",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 25,
          storeName: "Ranch Market Love",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 26,
          storeName: "Ranch Market PIM 1",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 27,
          storeName: "Ranch Market PIM 3",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 28,
          storeName: "Ranch Market Pesanggrahan",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 29,
          storeName: "Ranch Market Pasarina",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 30,
          storeName: "Farmers Market Epicentrum",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 31,
          storeName: "Farmers Market Kelapa Gading",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 32,
          storeName: "Farmers Market Bintaro Exchange",
          storeIsActive: true,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 33,
          storeName: "Farmers Market SMS",
          storeIsActive: true,
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
    await queryInterface.bulkDelete("Customer_Stores", null, {});
  },
};
