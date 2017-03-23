var bodyParser = require('body-parser'),
    http       = require('http'),
    express    = require('express')
    datos       = require('./Datos')
    socketio   = require('socket.io')

var port       = port = process.env.PORT || 3000,
    app        = express(),
    Server     = http.createServer(app)
    io         = socketio(Server)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/datos', datos)
app.use(express.static('public'))

io.on('connection', function(socket, chat){
  console.log('Alguien se ha conectado con Sockets');
  //socket.emit('bienes', 'listado de bienes desde el servidor');
  //socket.on('new-user', function(user){
    //console.log(user);
    //socket.emit('users', JSON.stringify([{nombre: "SocketUser", img: "p2.png"}]));
  //})
  //socket.on('new-message', function(message){
    //console.log(message);
    //socket.emit('messages', JSON.stringify([{sender: "Socket", text: "Hola desde Socket"}]));
  //})
})

Server.listen(port, function(){
  console.log("Servidor Corriendo en el puerto: "+ port);
})
