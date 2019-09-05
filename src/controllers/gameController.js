const config = require('../config')
const { preparePoker, fanPi, timeClock } = require('../lib')
const { Round } = require('../core')
const { notify } = require('../deliveries')
const wsController = require('./wsController')
const dbController = require('./dbController')
const userController = require('./userController')


var gameController = function (game, wsc) {
  this.game = game
  this.poker = null
  this.pokerList = []
  this.wsController = new wsController(wsc)
  this.dbController = new dbController()
  this.userController = new userController(this.wsController, this.dbController)

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

    this.userListener()
  }

  this.userListener = function () {
    this.userController.on('SYSTEM_USER_JOIN', (user) => {
      console.log(user)
    })
  }

  this.mounted = function () {
    // this.game.startGame()
  }

  var _process = function () {
    this.beforeCreated()
    this.mounted()
  }.call(this)
}
module.exports = gameController