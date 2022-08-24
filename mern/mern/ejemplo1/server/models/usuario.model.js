const mongoose = require('mongoose');
// near the top is a good place to group our imports
const bcrypt = require('bcrypt');

const UsuarioSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: [true, "Debe ingresar su nombre"]
    },
    apellido: {
      type: String,
      required: [true, "Debe ingresar su apellido"]
    },
    email: {
      type: String,
      required: [true, "Email es requerido"]
    },
    password: {
      type: String,
      required: [true, "La clave es requerida"],
      minlength: [6, "La clave debe ser de largo 6"]
    }
  }, {timestamps: true});

  // add this after UserSchema is defined
  UsuarioSchema.virtual('confirmPassword')
        .get( () => this._confirmPassword )
        .set( value => this._confirmPassword = value );

    UsuarioSchema.pre('validate', function(next) {
        if (this.password !== this.confirmPassword) {
            this.invalidate('confirmPassword', 'Las claves deben ser iguales');
        }
        next();
    });

    // this should go after 
    UsuarioSchema.pre('save', function(next) {
        bcrypt.hash(this.password, 10)
            .then(hash => {
                this.password = hash;
                next();
            });
    });

  const Usuario = mongoose.model("Usuario", UsuarioSchema);

  module.exports = Usuario;

