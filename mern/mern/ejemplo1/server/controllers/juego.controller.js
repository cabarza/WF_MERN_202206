const Juego = require('../models/juego.model');
const Jugador = require('../models/jugador.model');

module.exports.listar = (req, res) => {
    Juego.aggregate([
        {
            $group:
              {
                _id: "$numero",
                juego: { $push:  { jugador: "$jugadorId",  estado: "$estado", id:"$_id" } }
              }
        }
        ]).sort({"_id": 1})
        .then(resp => {
            Jugador.populate(resp, {
                    path: "juego.jugador"
                }).then(datos => {
                    res.json({
                        datos: datos,
                        error: false
                    })
                }).catch(e => {
                    res.json({
                        error: true,
                        mensaje: 'Ha ocurrido un error'
                    })
                });
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
    const data = await Juego.aggregate(
        [
            {
                $group: {
                    _id: "",
                    max: { $max: "$numero" }
                }
            }
        ]
     );
     const cantidad = data[0].max;
    console.log('Número máximo', cantidad);
    const jugadores = await Jugador.find();
    for(j of jugadores) {
        await Juego.create({
            numero: cantidad + 1,
            jugadorId: j._id,
            estado: 'PREPARANDOSE'
        });
    }
    // const juego = await Juego.find({numero: cantidad+1}).populate('jugador');
    // res.json({error: false, datos: juego});
    this.listar(req, res);
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
    Juego.findById(req.params.id)
        .then(juego => {
            if(juego){
                switch(juego.estado) {
                    case 'PREPARANDOSE':
                        juego.estado = 'JUGANDO';
                        break;
                    case 'JUGANDO':
                        juego.estado = 'FINALIZADO'
                        break;
                }
                Juego.findByIdAndUpdate(req.params.id, juego, { runValidators:true })
                    .then(resp => {
                        this.listar(req, res);
                    }).catch(e => {
                        res.json({
                            error: true,
                            mensaje: 'Ha ocurrido un error'
                        })
                    });

            } else {
                res.json({
                    error: true,
                    mensaje: 'El juego no existe'
                })
            }
        })
}