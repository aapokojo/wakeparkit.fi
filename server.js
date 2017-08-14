var request = require('request-promise');
var express = require('express');
var server = express();

server.get('/', function(request, response, next) {
  response.sendFile(__dirname + '/html/index.html');
})

server.get('/css/style.css', function(request, response, next) {
  response.sendFile(__dirname + '/html/css/style.css');
})

server.get('/media/:id', function(request, response, next) {
  response.sendFile(__dirname + '/html/media/' + request.params.id);
})

var port_number = server.listen(process.env.PORT || 3000, function () {
  console.log('Server listening on http://localhost:3000/');
});
