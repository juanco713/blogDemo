const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../index');

const Category = sequelize.define("category", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
    }, {
    timestamps: false
});


module.exports = Category;