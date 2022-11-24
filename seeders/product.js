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
      "Products",
      [
        {
          id: 1,
          productName: "White Quinoa",
          productSize: "100gr",
          productVolumeInCarton: 24,
          productBarcode: 9891836910631,
          productBuyPricePcs: 10000,
          productSellPricePcs: 18500,
          productSellPriceCtn: 444000,
          productIsActive: true,
          createdAt:"2022-10-14 21:15:22",
          updatedAt:"2022-10-14 21:15:22",
          BrandId: 1,
          CategoryId: 1
        },
        {
          id: 2,
          productName: "Tricolor Quinoa",
          productSize: "1kg",
          productVolumeInCarton: 12,
          productBarcode: 9891836918931,
          productBuyPricePcs: 80000,
          productSellPricePcs: 115500,
          productSellPriceCtn: 1386000,
          productIsActive: true,
          createdAt:"2022-10-14 21:15:22",
          updatedAt:"2022-10-14 21:15:22",
          BrandId: 1,
          CategoryId: 1
        },
        {
          id: 3,
          productName: "Red Quinoa",
          productSize: "500gr",
          productVolumeInCarton: 24,
          productBarcode: 9891836918046,
          productBuyPricePcs: 72500,
          productSellPricePcs: 90800,
          productSellPriceCtn: 2179200,
          productIsActive: true,
          createdAt:"2022-10-14 21:15:22",
          updatedAt:"2022-10-14 21:15:22",
          BrandId: 1,
          CategoryId: 1
        },
        {
          id: 4,
          productName: "Chia Seed",
          productSize: "1kg",
          productVolumeInCarton: 12,
          productBarcode: 9891836919027,
          productBuyPricePcs: 100000,
          productSellPricePcs: 135000,
          productSellPriceCtn: 1620000,
          productIsActive: true,
          createdAt:"2022-10-14 21:15:22",
          updatedAt:"2022-10-14 21:15:22",
          BrandId: 1,
          CategoryId: 2
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
    await queryInterface.bulkDelete("Products", null, {});
  },
};
