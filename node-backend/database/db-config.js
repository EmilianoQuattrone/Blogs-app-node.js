const { Sequelize } = require('sequelize');

const db = new Sequelize(
    'crud_mern',
    'root',
    'Eq39729766',
    {
        host: 'localhost',
        dialect: 'mysql'
    });

module.exports = {
    db
}