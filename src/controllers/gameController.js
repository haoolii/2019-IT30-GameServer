const config = require('../config')
const { preparePoker, fanPi, timeClock } = require('../lib')
const { Round } = require('../core')
const { notify } = require('../deliveries')
const wsController = require('./wsController')
const dbController = require('./dbController')
const userController = require('./userController')
const jwt = require('jsonwebtoken')

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
    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE1Njc3NDY5MTN9.dIdq6iQmKXwL_zO4FF4aUOvXDzACemmM2K1sZnrn2uXg'
    console.log('test')
    try {
      var decoded = jwt.verify(token, '878787');
    } catch (err) {
      console.log(err.message)
    }
  }

  var _process = function () {
    this.beforeCreated()
    this.mounted()
  }.call(this)
}
module.exports = gameController