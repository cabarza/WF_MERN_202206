const express = require('express');
const app = express();
const cors = require('cors'); 
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./config/mong.config');

require('./routes/jugador.route')(app);


app.listen(port, () => console.log('Server Up on port ' + port));