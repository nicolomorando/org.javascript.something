// Morando Nicolò	
// to send string to a serial port.

var SerialPort = require('serialport'); 

var Readline = SerialPort.parsers.Readline
var serialPort = new SerialPort('COM7', {
	baudRate: 9600
  })

var parser = new Readline()
serialPort.pipe(parser)
parser.on('data', function (data) {
	console.log('data received: ' + data)
})

serialPort.on('open', function () {
	console.log('Communication is on!')
})

serialPort.write('writing..', function(err) {
  if (err) {
    return console.log('Error on write: ', err.message);
  }
  console.log('message written');
});
