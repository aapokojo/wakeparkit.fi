var request = require('request-promise');
var express = require('express');
var server = express();

server.get('/', function(request, response, next) {
  response.sendFile(__dirname + '/html/index.html');
})

server.get('/css/style.css', function(request, response, next) {
  response.sendFile(__dirname + '/html/css/style.css');
})

server.get('/fonts/:id', function(request, response, next) {
  response.sendFile(__dirname + '/html/fonts/' + request.params.id);
})

server.get('/media/:id', function(request, response, next) {
  response.sendFile(__dirname + '/html/media/' + request.params.id);
})

server.get('/scripts/:id', function(request, response, next) {
  response.sendFile(__dirname + '/html/scripts/' + request.params.id);
})

server.get('/data.json', function(request, response, next) {
  response.sendFile(__dirname + '/html/data/data.json');
})

var port_number = server.listen(process.env.PORT || 3000, function () {
  console.log('Server listening on http://localhost:3000/');
});
