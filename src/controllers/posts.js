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


async function getOnePost(req,res) {
    try {
        const idPost = req.params.id;
        const postFound = await Post.findByPk(idPost);
        if(postFound) {
            res.json(postFound).status(200);
        } else {
            res.json({message: "Post not found!"}).status(404);
        }
    } catch (error) {
        console.error(error).status(500);
    }
};

async function deleteOnePost(req,res) {
    try {
        const idPost = req.params.id;
        const postFound = await Post.findByPk(idPost);
        if(postFound) {
            await postFound.destroy();
            res.json({message: `Post called ${postFound.titulo} was deleted!`}).status(200);
        } else {
            res.json({message: "Cant delete the post"}).status(404);
        }
    } catch (error) {
        console.error(error)
    }
};

async function updatePost(req,res) {
    try {
        const idPost = req.params.id;
        const postFound = await User.findByPk(idPost);
        if(titulo || contenido || imagen) {
            const updatedPost = await postFound.update({
                titulo: req.body.titulo,
                contenido: req.body.contenido,
                imagen: req.body.imagen
            });
            await updatedPost.save();
            res.json({message:'The post has been updated'}).status(200)
        } else {
            res.json('You have to complete at least one field').status(401)
        }
    } catch (error) {
        console.error(error);
    }
}


module.exports = { createPost, getAllPosts, getOnePost, deleteOnePost, updatePost };