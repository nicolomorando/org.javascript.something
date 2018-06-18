// MORANDO NICOLO'

var SerialPort = require('serialport');


// OPEN SERIAL CONNECTION 

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


// SEND COMMAND, STRING TO A PORT

serialPort.write('writing..', function(err) {
  if (err) {
    return console.log('Error on write: ', err.message);
  }
  console.log('message written');
});