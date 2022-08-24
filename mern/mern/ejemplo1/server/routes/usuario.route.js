const UsuarioController = require('../controllers/usuario.controller');

module.exports = (app) => {
    app.post('/api/v1/usuario', UsuarioController.registrar);
    app.post('/api/v1/login', UsuarioController.login);
}