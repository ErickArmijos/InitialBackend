// sequelize.js
require('dotenv').config()
const { Sequelize } = require('sequelize');

// Crea una nueva instancia de Sequelize y pasa la URL de conexión de tu base de datos
const sequelize = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`);

module.exports = sequelize;
