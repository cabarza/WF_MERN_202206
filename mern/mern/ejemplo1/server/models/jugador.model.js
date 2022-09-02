const mongoose = require('mongoose');

const JugadorSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del jugador es requerido'],
        minlength: [2, 'El nombre del jugador debe tener almenos 2 caracteres']
    },
    posicion: {
        type: String,
        maxlength: [30, 'El largo máximo de la posición es de 30']
    },
    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario"
    }

}, {timestamps: true});

JugadorSchema.virtual('usuario', {
    ref: 'Usuario',
    localField: 'usuarioId',
    foreignField: '_id'
  });

JugadorSchema.set('toObject', {virtuals: true});
JugadorSchema.set('toJSON', {virtuals: true});

const Jugador = mongoose.model('Jugador', JugadorSchema);

module.exports = Jugador;