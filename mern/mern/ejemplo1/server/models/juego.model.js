const mongoose = require('mongoose');

const JuegoSchema = new mongoose.Schema({
    numero: {
      type: Number,
      required: true
    },
    jugadorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Jugador',
        required: true
    },
    estado: {
        type: String,
        required: true
    }
  }, {timestamps: true});

  JuegoSchema.virtual('jugador', {
    ref: 'Jugador',
    localField: 'jugadorId',
    foreignField: '_id'
  });

  JuegoSchema.set('toObject', {virtuals: true});
  JuegoSchema.set('toJSON', {virtuals: true});


  const Juego = mongoose.model("Juego", JuegoSchema);

  module.exports = Juego;

