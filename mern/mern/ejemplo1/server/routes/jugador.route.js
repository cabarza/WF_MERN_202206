const JugadorController = require('../controllers/jugador.controller');
const { autenticar } = require('../config/jwt.config');


module.exports = (app, upload) => {
    app.get('/api/v1/jugadores', autenticar, JugadorController.listar);
    app.post('/api/v1/jugadores', autenticar, JugadorController.crear);
    app.delete('/api/v1/jugadores/:id', autenticar, JugadorController.eliminar);
    app.put('/api/v1/jugadores/:id', autenticar, JugadorController.actualizar);
    app.get('/api/v1/jugadores/:id', autenticar, JugadorController.obtener);
    app.post('/api/v1/jugadores/upload', autenticar, upload.single('archivo'), JugadorController.upload);
}