require('dotenv').config();
const { Sequelize, Model } = require('sequelize');
// const { FORCE } = require('sequelize/types/index-hints');

module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
  //   this.sync({ force: true })
  //   FORCE
);
