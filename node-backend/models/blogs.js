//Importamos la conexion a la db.
const { DataTypes } = require('sequelize');
const { db } = require('../database/db-config');

const BlogModel = db.define('blogs', {

    titulo: {

        type: DataTypes.STRING
    },

    contenido: { type: DataTypes.STRING },

    createdAt: {

        type: DataTypes.DATE,
    },

    updatedAt: {

        type: DataTypes.DATE,
    },
});

module.exports = {

    BlogModel
}