"use strict";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("alunos", "email", {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  },

  async down() {},
};
