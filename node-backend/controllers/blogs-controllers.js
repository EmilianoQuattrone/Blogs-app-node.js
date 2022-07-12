const { BlogModel } = require('../models/blogs');
const { request, response } = require('express');

// Metodos para realizar el CRUD.

const blogsGetAll = async (req = request, res = response) => {

    try {

        const blogs = await BlogModel.findAll();
        res.status(200).json({

            blogs
        });

    } catch (error) {

        res.status(400).json({

            mensaje: error
        });
    }
}

const blogsGet = async (req = request, res = response) => {

    const { id } = req.params;

    try {

        const blog = await BlogModel.findAll({

            where: {

                id: id
            }
        });

        res.status(200).json(blog[0]);

    } catch (error) {

        res.status(400).json({

            mensaje: error
        });
    }
}

const createBlog = async (req = request, res = response) => {

    const { titulo, contenido } = req.body;
    try {

        const newBlog = await BlogModel.create({ titulo, contenido });
        res.status(200).json({

            mensaje: 'Registro creado.',
            newBlog
        });

    } catch (error) {

        res.status(400).json({

            mensaje: error
        });
    }
}

const updateBlog = async (req = request, res = response) => {

    const { id } = req.params;
    const { titulo, contenido } = req.body;

    try {

        const updBlog = await BlogModel.findByPk(id);

        if (!updBlog) {

            return res.status(404).json({

                mensaje: `El id:${id} no existe en la base de datos.`
            });

        } else {

            updBlog.titulo = titulo;
            updBlog.contenido = contenido;

            await updBlog.save();

            res.status(200).json({

                mensaje: 'Registro actualizado',
                updBlog
            });

        }


    } catch (error) {

        res.status(400).json({

            mensaje: error
        });
    }
}

const deleteBlog = async (req = request, res = response) => {

    const { id } = req.params;

    try {

        const eliminarBlog = await BlogModel.destroy({

            where: { id: id }
        });

        if (!eliminarBlog) {

            return res.status(400).json({

                mensaje: `El registro con el id:${id} ya fue borrado.`
            });

        } else {

            res.status(200).json({

                mensaje: 'Registro eliminado.',
                eliminarBlog
            });
        }

    } catch (error) {

        res.status(400).json({

            mensaje: error
        });
    }
}

module.exports = {

    blogsGetAll,
    blogsGet,
    createBlog,
    updateBlog,
    deleteBlog
}