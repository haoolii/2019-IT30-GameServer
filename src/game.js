var { gameController, wsController} = require('./controllers')
var { Game } = require('./core')
var game = function (ws) {
  new gameController(new Game(), ws)
}

module.exports = game