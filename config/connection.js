const Sequelize = require('sequelize');
require('dotenv').config();

// Create connection

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3001
});

module.exports = sequelize;