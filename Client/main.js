var request = require("request");

// Hier tragen wir die IP des Servers ein
var serverIP = "127.0.0.1";
// Hier tragen wir den Port des Servers ein
var serverPort = "3500";
var address = "http://"+serverIP+":"+serverPort+"/";

// Anfrage senden und die Antwort in der Console ausgeben
request(address, function (error, response, body) {
  console.log(body);
});
