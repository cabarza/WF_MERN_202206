const express = require('express');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' })
const app = express();
const cors = require('cors'); 
const cookieParser = require('cookie-parser');
const port = 8000;

// Obtener la ruta donde esta el proyecto
global.__basedir = __dirname;

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./config/mong.config');

require('./routes/jugador.route')(app, upload);
require('./routes/usuario.route')(app);
require('./routes/juego.route')(app);


const server = app.listen(port, () => console.log('Server Up on port ' + port));

const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log('CONNECTION', socket.id);
    socket.on('cambioEstado', data => {
        console.log('Evento cambioEstado', data);
        socket.broadcast.emit('notificaCambioestado', data);
    });
})