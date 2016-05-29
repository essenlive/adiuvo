Meteor.startup(function() {
	ledSerialPort = new SerialPort.SerialPort('/COM3', {
		baudrate: 4800,
		parser: SerialPort.parsers.readline('\r\n')
	}); 
	eyeSerialPort = new SerialPort.SerialPort('/COM4', {
		baudrate: 4800,
		parser: SerialPort.parsers.readline('\r\n')
	}); 

	ledSerialPort.on('open', function() {
		console.log('Led arduino port open');
	});

	eyeSerialPort.on('open', function() {
		console.log('Eye arduino port open');
	});

	ledSerialPort.on('data', Meteor.bindEnvironment(function (error, result) {
		var data = error;
		console.log("led answer :" + data);		
	}));

	eyeSerialPort.on('data', Meteor.bindEnvironment(function (error, result) {
		var data = error;
		console.log("eye answer :" + data);		
	}));

});

Meteor.methods({
	sendToLed: function (message) {
		ledSerialPort.write(message);
		console.log("led message :" + message);
		return message;
	},
	sendToEye: function (message) {
		eyeSerialPort.write(message);
		console.log("eye messge :" + message);
		return message;
	},
});  
