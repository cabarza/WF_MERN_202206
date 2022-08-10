const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors())

const data = [];


app.get('/api/v1/hello', (req, res) => {
    res.json({mensaje: 'Hola a todos, como estan? Yo estoy super'});
});

app.post('/api/v1/hello', (req, res) => {
    res.json({mensaje: 'Esto es por POST'})
});

app.get('/api/v1/personas', (req, res) => {
    res.json({data: data});
});

app.post('/api/v1/personas', (req, res) => {
    const obj = req.body;
    data.push(obj);
    res.json({mensaje: 'La persona se ha agregado exitosamente', data: obj});
});

app.put('/api/v1/personas/:id', (req, res) => {
    const obj = req.body;
    data.splice(req.params.id, 1, obj);
    res.json({mensaje: 'La persona se ha actualizado exitosamente', data: obj});
});

app.delete('/api/v1/personas/:id', (req, res) => {
    data.splice(req.params.id, 1);
    res.json({mensaje: 'La persona se ha eliminado exitosamente'});
});


app.listen(port, () => console.log('Servidor arriba en el puerto ' + port));