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
      "Purchase_Orders",
      [
        {
          id: 1,
          poNo: 7301,
          poCreated: "2022-05-31",
          poSent: "2022-06-07",
          poQty: 12,
          poTotalPrice: 115000,
          poDiscount: 10000,
          poTotalExcludeVat: 105000,
          poVat: 11500,
          poTotalIncludeVat: 116500,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        //   ProductAndStoreId: 2,
        ProductAndStoreCustomerStoreId: 2
        },
        {
          id: 2,
          poNo: 7394,
          poCreated: "2021-05-31",
          poSent: "2021-06-07",
          poQty: 24,
          poTotalPrice: 830137,
          poDiscount: 8937,
          poTotalExcludeVat: 308041,
          poVat: 38904,
          poTotalIncludeVat: 93849017,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        //   ProductAndStoreId: 5,
        ProductAndStoreCustomerStoreId:5
        },
        {
          id: 3,
          poNo: 9840,
          poCreated: "2020-05-31",
          poSent: "2020-06-07",
          poQty: 6,
          poTotalPrice: 872031,
          poDiscount: 98378,
          poTotalExcludeVat: 892803,
          poVat: 83022,
          poTotalIncludeVat: 37071109,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        //   ProductAndStoreId: 3,
        ProductAndStoreCustomerStoreId: 3
        },
        {
          id: 4,
          poNo: 8340,
          poCreated: "2019-05-31",
          poSent: "2019-06-07",
          poQty: 12,
          poTotalPrice: 9723701,
          poDiscount: 83401,
          poTotalExcludeVat: 891937,
          poVat: 83809,
          poTotalIncludeVat: 838983071,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        //   ProductAndStoreId: 1,
        ProductAndStoreCustomerStoreId: 1
        },
        {
          id: 5,
          poNo: 8930,
          poCreated: "2018-05-31",
          poSent: "2018-06-07",
          poQty: 24,
          poTotalPrice: 893891,
          poDiscount: 8934,
          poTotalExcludeVat: 8293013,
          poVat: 38018,
          poTotalIncludeVat: 78936819,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        //   ProductAndStoreId: 4,
        ProductAndStoreCustomerStoreId: 4
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
    await queryInterface.bulkDelete("Purchase_Orders", null, {});
  },
};
