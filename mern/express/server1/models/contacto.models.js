const mongoose = require('mongoose');


const validateEmail = (email) => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


const ContactoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    email: {
        type: String,
        required: [true, 'El email es requerido'],
        validate: [validateEmail, 'El formato del email no es válido']
    },
    fono: {
        type: Number,
        max:[999, 'El numero máximo es 999']
    }
}, {timestamp: true});

const Contacto = mongoose.model('Contact', ContactoSchema);

module.exports = Contacto;