'use strict';

const express = require('express')
const path = require('path')

const app = express();
const router = express.Router()
const bodyParser = require('body-parser')

// get port from environment and store in Express
const port = '3000'

// create server
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.set('port', port);
app.use(express.static(path.join(__dirname, 'public')));
server.listen(port)
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded





io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});


// routes go below:

//get homepage
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});









app.use('/', router)
