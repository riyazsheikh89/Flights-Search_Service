'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert("Airports",
     [
       {
         name: "Netaji Subhash Chandra Bose International Airport",
         cityId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         name: "Bagdogra International Airport",
         cityId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         name: "Chennai International Airport",
         cityId: 8,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
        name: "Indira Gandhi International Airport",
        cityId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
