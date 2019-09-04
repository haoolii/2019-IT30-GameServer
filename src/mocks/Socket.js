var Socket = function (id) {
  this.id = id

  this.on = function (CMD, MSG) {
    console.log(`MOCK SOCKET ON: CMD:${CMD} MSG:${MSG}`)
  }

  this.emit = function (CMD, MSG) {
    console.log(`MOCK SOCKET EMIT: CMD:${CMD} MSG:${MSG}`)
  }
}

module.exports = Socket