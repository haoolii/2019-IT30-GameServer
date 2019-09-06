const config = require('../config')

var wsController = function (ws) {
  this.ws = ws
  this._on = {}

  this.on = function (cmd, cb) {
    this._on[cmd] = []
    this._on[cmd].push(cb)
  }

  this.emit = function (CMD, r) {
    if (!this._on[CMD]) throw 'NOT EXIST'
    this._on[CMD].map(e => e(r))
  }

  this.mounted = function () {
    this.ws.onConnected((socket) => {
      this.emit('onConnected', socket)
    })
  }
  console.log('wsController !!!')
  // this.mounted()
}
module.exports = wsController