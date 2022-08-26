const JuegoController = require('../controllers/juego.controller');
const { autenticar } = require('../config/jwt.config');

module.exports = (app) => {
    app.get('/api/v1/juegos', autenticar, JuegoController.listar);
    app.post('/api/v1/juegos', autenticar, JuegoController.crear);
    app.delete('/api/v1/juegos/:id', autenticar, JuegoController.eliminar);
    app.put('/api/v1/juegos/:id', autenticar, JuegoController.actualizar);
    app.get('/api/v1/juegos/:id', autenticar, JuegoController.obtener);
}