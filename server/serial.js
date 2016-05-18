Meteor.startup(function() {
  // try{
  // serialPort = new SerialPort.SerialPort('/COM3', {
  // baudrate: 38400,
  // parser: SerialPort.parsers.readline('\r\n')
  // }); 
  // }
  // catch(e){
  //  console.log(e)
  // }

  // serialPort.on('open', function() {
  // console.log('Port open');
  // });

  // serialPort.on('data', Meteor.bindEnvironment(function (error, result) {
  // var data = error;
  // console.log("answer ----------------");
  // console.log(data);
  // }));

});

Meteor.methods({
  sendToSerialPort: function (message) {
  // serialPort.write(message);
  console.log(message);
  return message;
},
}); 