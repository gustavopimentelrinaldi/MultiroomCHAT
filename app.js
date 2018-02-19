/* import server config */
var app = require("./config/server");

/* port listener */
var server = app.listen(8080, function(){
  console.log("Servidor online!!");
})

var io = require('socket.io').listen(server);

app.set('io',io);

io.on('connection', function(socket){
  console.log('Usuário conectou!');

  socket.on('disconnect', function(){
    console.log('Usuário desconectou!');
  });
})