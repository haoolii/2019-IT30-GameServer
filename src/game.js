var { gameController } = require('./controllers')
var { Game } = require('./core')
var game = function () {
  new gameController(new Game())
}

module.exports = game