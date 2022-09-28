const JugadorController = require('../controllers/jugador.controller');
const { autenticar } = require('../config/jwt.config');


module.exports = (app, upload) => {
    app.get('/api/v1/jugadores', autenticar, JugadorController.listar);
    app.post('/api/v1/jugadores', autenticar, upload.single('avatar'), JugadorController.crear);
    app.delete('/api/v1/jugadores/:id', autenticar, JugadorController.eliminar);
    app.put('/api/v1/jugadores/:id', autenticar, upload.single('avatar'), JugadorController.actualizar);
    app.get('/api/v1/jugadores/:id', autenticar, JugadorController.obtener);
    app.get('/api/v1/jugadores/:id/avatar', autenticar, JugadorController.avatar);
    app.post('/api/v1/jugadores/upload', autenticar, upload.single('archivo'), JugadorController.upload);
}