const { Router } = require('express');
const route = Router();
const { createPost, getAllPosts, getOnePost, deleteOnePost, updatePost } = require('../controllers/posts');
const { createCategory } =require('../controllers/category');

// post routes
route.get('/posts', getAllPosts);
route.get('/posts/:id', getOnePost);
route.post('/posts', createPost);
route.patch('/posts/:id', updatePost);
route.delete('/posts/:id', deleteOnePost);

//category routes

route.post('/category', createCategory);







module.exports = route;