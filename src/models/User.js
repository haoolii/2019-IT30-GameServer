var User = function (_id) {
  var _socket = null

  this.id = _id

  this.bet = {
    'banker': 0,
    'player': 0,
    'bankerking': 0,
    'playerking': 0,
    'tie': 0,
    'tiepair': 0,
    'bpair': 0,
    'ppair': 0
  }

  this.balance = 0

  this.setSocket = function (socket) {
    _socket = socket
  }

  this.resetBet = function () {
    this.bet = {
      'banker': 0,
      'player': 0,
      'bankerking': 0,
      'playerking': 0,
      'tie': 0,
      'tiepair': 0,
      'bpair': 0,
      'ppair': 0
    }
  }

  this.emit = function (CMD, MSG) {
    if (!_socket) throw new Error('Socket wrong!')
    _socket.emit(CMD, MSG)
  }
}

module.exports = User