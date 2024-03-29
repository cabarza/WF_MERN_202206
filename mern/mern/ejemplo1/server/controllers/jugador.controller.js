const Jugador = require('../models/jugador.model');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/jwt.config');
const fs = require("fs");

module.exports.listar = (req, res) => {
    Jugador.find().populate('usuario')
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
    const payload = jwt.decode(req.cookies.usertoken, secretKey);
    const path = global.__basedir + "/" +  req.file.path;
    req.body.avatar = path;
    req.body.usuarioId = payload._id;
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
    Jugador.findById(req.params.id)
        .then(jugador => {
            if(req.file){
                const path = global.__basedir + "/" +  req.file.path;
                req.body.avatar = path;
            } else {
                req.body.avatar = jugador.avatar;
            }
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
        })
    
    
    
}


module.exports.upload = (req, res, next) => {
    const path = global.__basedir + "/" +  req.file.path;
    res.download(path, req.file.path);
    fs.rm(path, (err) => console.log(err));
}

module.exports.avatar = (req, res) => {
    Jugador.findById(req.params.id)
        .then(resp => {
            if(resp?.avatar) {
                res.download(resp.avatar);
            }
        })
}