var config = require('../config')
var { preparePoker, grabRandomPoker, fanPi, timeClock } = require('../lib')
var { bcr, poker } = require('../config')
var { User } = require('../models')
var { Socket } = require('../mocks')

var { Game, Round } = require('../core')
var { notify } = require('../deliveries')

module.exports = function () {
  let poker = config.poker
  let pokerList = preparePoker(poker.pokerTemplate, poker.pokerPointTemplate, poker.pokerTypeTemplate, poker.pokerCount)
  let game = new Game()
  game.initRound(Round)
  game.initNotify(notify)
  game.initPokerList(pokerList)
  game.initTimeClock(timeClock)
  game.initPlayerSupplyRule(bcr.player_rule)
  // console.log(bcr.banker_rule)
  game.initBankererSupplyRule(bcr.banker_rule)

  game.startGame()
}