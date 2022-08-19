const Jugador = require('../models/jugador.model');

module.exports.listar = (req, res) => {
    Jugador.find()
        .then(resp => {
            res.json({
                datos: resp,
                error: false
            })
        }).catch(e => {
            res.json({
                error: true,
                mensaje: 'Ha ocurrido un error'
            })
        });
}

module.exports.obtener = (req, res) => {
    Jugador.findById(req.params.id)
        .then(resp => {
            res.json({
                datos: resp,
                error: false
            })
        }).catch(e => {
            res.json({
                error: true,
                mensaje: 'Ha ocurrido un error'
            })
        });
}

module.exports.crear = (req, res) => {
    Jugador.create(req.body)
        .then(resp => {
            res.json({
                datos: resp,
                error: false
            })
        }).catch(e => {
            res.json({
                error: true,
                mensaje: 'Ha ocurrido un error'
            })
        });
}


module.exports.eliminar = (req, res) => {
    Jugador.findByIdAndDelete(req.params.id)
        .then(resp => {
            res.json({
                error: false
            })
        }).catch(e => {
            res.json({
                error: true,
                mensaje: 'Ha ocurrido un error'
            })
        });
}


module.exports.actualizar = (req, res) => {
    Jugador.findByIdAndUpdate(req.params.id, req.body, { runValidators:true })
        .then(resp => {
            res.json({
                datos: req.datos,
                error: false
            })
        }).catch(e => {
            res.json({
                error: true,
                mensaje: 'Ha ocurrido un error'
            })
        });
}