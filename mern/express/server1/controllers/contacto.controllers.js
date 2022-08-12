const Contact = require('../models/contacto.models');

module.exports.listar = (req, res) => {
    Contact.find()
        .then(data => {
            res.json({data: data})
        }).catch(error => {
            res.status(500).json({mensaje: error})
        })
}

module.exports.buscar = (req, res) => {
    Contact.findById(req.params.id)
    .then(data => {
        res.json({data: data})
    }).catch(error => {
        res.status(500).json({mensaje: error})
    })
}

module.exports.crear = (req, res) => {
    Contact.create(req.body)
    .then(data => {
        res.json({data: data})
    }).catch(error => {
        res.status(500).json({mensaje: error})
    })
}

module.exports.actualizar = (req, res) => {
    Contact.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
    .then(data => {
        res.json({data: req.body})
    }).catch(error => {
        res.status(500).json({mensaje: error})
    })
}

module.exports.eliminar = (req, res) => {
    Contact.findByIdAndDelete(req.params.id)
    .then(data => {
        res.json({mensaje: 'Elemento eliminado'})
    }).catch(error => {
        res.status(500).json({mensaje: error})
    })
}