const JugadorController = require('../controllers/jugador.controller');

module.exports = (app) => {
    app.get('/api/v1/jugadores', JugadorController.listar);
    app.post('/api/v1/jugadores', JugadorController.crear);
    app.delete('/api/v1/jugadores/:id', JugadorController.eliminar);
}