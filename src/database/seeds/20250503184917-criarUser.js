'use strict';
import bcrypt from 'bcryptjs';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface) {

    await queryInterface.bulkInsert('users', [{
      nome: 'John Doe',
      email: "Jonh@gmail.com",
      password_hash: await bcrypt.hash("123456", 9),
      created_at: new Date(),
      updated_at: new Date(),
     },{
      nome: 'Maria',
      email: "maria@gmail.com",
      password_hash: await bcrypt.hash("123456", 9),
      created_at: new Date(),
      updated_at: new Date(),
     },{
      nome: '123 123',
      email: "123@gmail.com",
      password_hash: await bcrypt.hash("123456", 9),
      created_at: new Date(),
      updated_at: new Date(),
     }], {});

  },

  async down () {}
};
