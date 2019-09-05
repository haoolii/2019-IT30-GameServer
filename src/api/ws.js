var ws = function (http) {
  var io = require('socket.io')(http)
  var _onConnectedCbs = []

  // middleware
  io.use((socket, next) => {
    console.log(socket.handshake.query.token)
    next()
  });

  io.on('connection', function (socket) {
    emitConnected(socket)
  })

  var emitConnected = function (socket) {
    _onConnectedCbs.map(e => e(socket))
  }
  var onConnected = function (cb) {
    _onConnectedCbs.push(cb)
  }

  return {
    onConnected
  }
}
module.exports = ws