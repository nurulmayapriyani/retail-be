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
      "Brands",
      [
        {
          id: 1,
          brandName: "El Organico",
          brandEmail: "dresanyamakmursejahtera@gmail.com",
          brandUsername: "elorganicoid",
          brandPassword: "icannottell",
          brandPhone: 6285716580350,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 2,
          brandName: "GoLite",
          brandEmail: "golitecorp@gmail.com",
          brandUsername: "goliteid",
          brandPassword: "secret",
          brandPhone: 6285716580355,
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id: 3,
          brandName: "Oatsy",
          brandEmail: "oatsycorp@gmail.com",
          brandUsername: "oatsyid",
          brandPassword: "betternot",
          brandPhone: 6285716580352,
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
    await queryInterface.bulkDelete("Brands", null, {});
  },
};
