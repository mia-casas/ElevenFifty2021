const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:Valparaiso2020@localhost:5432/eleven-journal");

module.exports = sequelize;