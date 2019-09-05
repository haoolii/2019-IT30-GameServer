var ws = function (http) {
  var io = require('socket.io')(http)

  io.on('connection', function (socket) {
    // console.log('a user connected');
    // setInterval(() => {
    //   socket.emit('MSG', Math.random() * 500 + 'hi noob')
    // }, 500)
  })

  http.listen(3022, function () {
    console.log('Socket listening on *:3022');
  })
}
module.exports = ws