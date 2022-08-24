const express = require('express');
const app = express();
const cors = require('cors'); 
const cookieParser = require('cookie-parser');
const port = 8000;

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./config/mong.config');

require('./routes/jugador.route')(app);
require('./routes/usuario.route')(app);


app.listen(port, () => console.log('Server Up on port ' + port));