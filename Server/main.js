// eine Express Applikation erstellen
var express = require('express');
var app = express();

// Eine Route definieren
app.get('/', function (req, res) {
  res.send('Hier könnte ein Sensoren Wert stehen');
});

// Server Live schalten
var server = app.listen(3500, function () {
  var host = server.address().address;
  var port = server.address().port;

  // falls der Wert http://::::3500 oder http://0.0.0.0:3500 ist, kann einfach http://localhost:3500 aufgerufen werden
  console.log('Example app listening at http://%s:%s', host, port);
});
