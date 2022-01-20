const Category = require('../database/models/categoryModel');

async function createCategory(req,res) {
    const newCategory = await Category.create({
        category_name: req.body.category_name
    });
    console.log(newCategory);
    res.json({message: `new category created`}).status(200);
};


module.exports = {createCategory};