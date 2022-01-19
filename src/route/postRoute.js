const { Router } = require('express');
const route = Router();
const { createPost, getAllPosts } = require('../controllers/posts');


route.get('/posts', getAllPosts);
route.post('/posts', createPost);









module.exports = route;