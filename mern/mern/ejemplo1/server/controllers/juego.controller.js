const Juego = require('../models/juego.model');
const Jugador = require('../models/jugador.model');

module.exports.listar = (req, res) => {
    Juego.aggregate([
        { $sort: { numero: 1 } },
        { $lookup: {from: 'Jugador', localField: 'jugadorId', foreignField: '_id', as: 'jugador'} },
        {
            $group:
              {
                _id: "$numero",
                juego: { $push:  { jugador: "$jugador", estado: "$estado" } }
              }
          }
        ])
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
    Juego.findById(req.params.id)
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

module.exports.crear = async (req, res) => {
    const cantidad = await Juego.find().count();
    const jugadores = await Jugador.find();
    for(j of jugadores) {
        await Juego.create({
            numero: cantidad + 1,
            jugadorId: j._id,
            estado: 'PREPARANDOSE'
        });
    }
    const juego = await Juego.find({numero: cantidad+1}).populate('jugador');
    res.json({error: false, datos: juego});
}


module.exports.eliminar = (req, res) => {
    Juego.findByIdAndDelete(req.params.id)
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
    Juego.findByIdAndUpdate(req.params.id, req.body, { runValidators:true })
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