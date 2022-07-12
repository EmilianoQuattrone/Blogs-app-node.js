const express = require('express');
const { blogsGetAll, blogsGet, createBlog, updateBlog, deleteBlog } = require('../controllers/blogs-controllers');

const router = express.Router();

router.get('/', blogsGetAll);
router.get('/:id', blogsGet);
router.post('/create', createBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;