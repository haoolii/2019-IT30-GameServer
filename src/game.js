var { gameController} = require('./controllers')
var { Game } = require('./core')
var game = function (ws) {
  console.log('!!!')
  new gameController(new Game())
}

module.exports = game