var config = require('../config')
var { preparePoker, grabRandomPoker, fanPi, timeClock, fanPi } = require('../lib')
var { bcr, poker } = require('../config')
var { User } = require('../models')
var { Socket } = require('../mocks')

var { Game, Round } = require('../core')
var { notify } = require('../deliveries')
var { shallowObject } = require('../utils')
module.exports = function () {
  let poker = config.poker
  let pokerList = preparePoker(poker.pokerTemplate, poker.pokerPointTemplate, poker.pokerTypeTemplate, poker.pokerCount)
  let game = new Game()
  game.initRound(Round)
  game.initNotify(notify)
  game.initPokerList(pokerList)
  game.initTimeClock(timeClock)
  game.initPlayerSupplyRule(bcr.player_rule)
  game.initBankererSupplyRule(bcr.banker_rule)
  game.initFanPi(fanPi)
  game.startGame()

  var user = {
    id: '78',
    bet: {
      'banker': 0,
      'player': 0,
      'bankerking': 0,
      'playerking': 0,
      'tie': 0,
      'tiepair': 0,
      'bpair': 0,
      'ppair': 0
    }
  }
  let u1 = new User('78')
  u1.setSocket(new Socket('78'))
  game.userJoin(u1)
  game.userBetout(u1)
}