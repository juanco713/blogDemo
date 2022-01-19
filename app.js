const express = require('express');
const app = express();
require('dotenv').config();
const sequelize = require('./src/database/index.js');
const Post = require('./src/database/models/postModel');
const Category = require('./src/database/models/categoryModel');



async function serverConnection() {
    try {
        Category.hasMany(Post);
        Post.belongsTo(Category);


        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connection has been established');
        app.use(express.json());
        app.use(require('./src/route/postRoute'))
        app.listen(process.env.PORT, () => {
            console.log(`Server running in port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error(error);
    }

};


serverConnection()

