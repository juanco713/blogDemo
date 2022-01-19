const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../index');

const Post = sequelize.define("post", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contenido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING
    },
    fecha_creacion: {
        type: DataTypes.DATE,
    }
}, {
    timestamps: false
});

module.exports = Post;