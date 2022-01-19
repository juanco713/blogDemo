const Post = require('../database/models/postModel');
const Category = require('../database/models/categoryModel');



async function getAllPosts(req, res) {
    try {
        const allPosts = await Post.findAll({
            attributes: ['id', 'titulo', 'imagen', 'fecha_creacion'],
            include: Category
        });
        if (allPosts.length === 0) {
            res.json({ message: 'No post has been published yet' }).status(404);
        } else {
            res.json(allPosts).status(200);
        }
    } catch (error) {
        console.error(error).status(500)
    }
}


async function createPost(req, res) {
    const { titulo, contenido, imagen } = req.body;
    if (titulo && contenido && imagen) {
        const newPost = await Post.create({
            titulo: req.body.titulo,
            contenido: req.body.contenido,
            imagen: req.body.imagen,
            fecha_creacion: new Date()
        });
        console.log(newPost);
        res.json(`The post ${newPost.titulo} has been created`).status(201);
    } else {
        res.json('You must have complete all the fields').status(401);
    }
};





module.exports = { createPost, getAllPosts };