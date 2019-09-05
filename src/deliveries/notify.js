'use strict'

var notify = function () {

  var broadcast = function (users, msg) {
    users.map(u => u.emit('MSG', msg))
  }

  var peer2peer = function (user, msg) {
    user.map(u => u.emit('MSG', msg))
  }

  return {
    broadcast,
    peer2peer
  }
}

module.exports = notify