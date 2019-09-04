var User = function () {
  var _socket = null

  this.setSocket = function (socket) {
    _socket = socket
  }

  this.emit = function (CMD, MSG) {
    if (!_socket) throw new Error('Socket wrong!')
    _socket.emit(CMD, MSG)
  }
}

module.exports = User