const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors())

require('./config/bd.config');

require('./routes/contacto.routes')(app);


app.listen(port, () => console.log('Servidor arriba en el puerto ' + port));