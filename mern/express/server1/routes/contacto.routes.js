const ContactController = require('../controllers/contacto.controllers');

module.exports = app => {
    app.get('/api/v1/personas', ContactController.listar);
    
    app.post('/api/v1/personas', ContactController.crear);
    
    app.put('/api/v1/personas/:id', ContactController.actualizar);
    
    app.delete('/api/v1/personas/:id', ContactController.eliminar);
}