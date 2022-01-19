const Sequelize = require('sequelize');

const { DB_NAME, DB_USERNAME, DB_PASSWORD} = process.env;
const sequelize = new Sequelize(DB_NAME,DB_USERNAME,DB_PASSWORD, {
    dialect: 'mariadb'
});


module.exports = sequelize;