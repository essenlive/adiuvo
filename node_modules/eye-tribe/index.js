var port = 6555;
var net = require('net');
var host = "localhost";
var data = {"values": {"frame": {"avg": {"x": 0, "y": 0}}}};

module.exports.createConnection = function () {
	var dataStream = net.createConnection(port, host);
	dataStream.write(JSON.stringify({
		"values": {
			"push": true,
			"version": 1,
		},
		"category": "tracker",
		"request": "set"
	}));

	dataStream.on('data', function (message){
		var oldData = data;
		try {
			data = JSON.parse(message);
		} catch(e) {
			data = oldData;
		}
	})

	var heartbeat = setInterval(function (){
		dataStream.write(JSON.stringify({
			"category": "heartbeat",
			"request": "null"
		}));
	}, 250);
}

module.exports.getCoordinates = function () {
	return { x: data['values']['frame']['avg']['x'],
			 y: data['values']['frame']['avg']['y'] };
}

module.exports.closeConnection = function () {
	clearInterval(heartbeat);
	dataStream.end();
}
