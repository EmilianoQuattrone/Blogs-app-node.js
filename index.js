const express = require('express');
const { db } = require('./node-backend/database/db-config');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/blogs', require('./node-backend/routes/routes.js'));

try {

    db.authenticate();
    console.log('Conexion exitosa.');

} catch (error) {

    console.log(`Error en la conexion ${db}`);
}

app.listen(8000, () => {

    console.log(`Servidor corriendo en puerto: ${8000}`);
});