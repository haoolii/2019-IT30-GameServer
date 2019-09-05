var Socket = function (id) {
  this.id = id

  this.on = function (CMD, PAYLOAD) {
    console.log(`MOCK SOCKET ON: CMD:${CMD} MSG:${JSON.stringify(PAYLOAD)}`)
  }

  this.emit = function (CMD, PAYLOAD) {
    console.log(`MOCK SOCKET EMIT: CMD:${CMD} MSG:${JSON.stringify(PAYLOAD)}`)
  }
}

module.exports = Socket