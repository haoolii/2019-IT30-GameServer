const config = require('../config')
const { preparePoker, fanPi, timeClock } = require('../lib')
var { Round } = require('../core')
var { notify } = require('../deliveries')

var gameController = function (game) {
  this.game = game
  this.poker = null
  this.pokerList = []
  this.beforeCreated = function () {
    this.poker = config.poker
    this.pokerList = preparePoker(this.poker.pokerTemplate, this.poker.pokerPointTemplate, this.poker.pokerTypeTemplate, this.poker.pokerCount)
    this.game.initRound(Round)
    this.game.initPokerList(this.pokerList)
    this.game.initNotify(notify)
    this.game.initTimeClock(timeClock)
    this.game.initPlayerSupplyRule(config.bcr.player_rule)
    this.game.initBankererSupplyRule(config.bcr.banker_rule)
    this.game.initFanPi(fanPi)
  }
  
  this.mounted = function () {
    this.game.startGame()
  }

  var _process = function () {
    this.beforeCreated()
    this.mounted()
  }.call(this)
}
module.exports = gameController