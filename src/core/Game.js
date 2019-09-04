var Game = function () {
  // Round
  this.roundTemplate = null
  this.round = null
  this.pokerList = null
  this.notify = null
  this.timeClock = null
  this.playerSupplyRule = null
  this.bankererSupplyRule = null


  // 牌組
  this.pokerList = null
  this.notify = null

  // 內部game data
  this.pool = {}
  this.state = 0

  this.initRound = function (roundtmp) { this.roundTemplate = roundtmp }

  this.initPokerList = function (pokerList) { this.pokerList = pokerList }

  this.initNotify = function (notify) { this.notify = notify }

  this.initTimeClock = function (timeClock) { this.timeClock = timeClock }

  this.initPlayerSupplyRule = function (playerSupplyRule) { this.playerSupplyRule = playerSupplyRule }

  this.initBankererSupplyRule = function (bankererSupplyRule) { this.bankererSupplyRule = bankererSupplyRule }

  this.checkInit = function () {
    if (!this.bankererSupplyRule) throw new Error('bankererSupplyRule is null')
    if (!this.playerSupplyRule) throw new Error('playerSupplyRule is null')
    if (!this.roundTemplate) throw new Error('roundTemplate is null')
    if (!this.timeClock) throw new Error('timeClock is null')
    if (!this.pokerList) throw new Error('pokerList is null')
    if (!this.notify) throw new Error('notify is null')
  }

  this.startGame = function () {
    this.checkInit()
    this.startNewRound()
  }

  this.startNewRound = function () {
    this.round = new this.roundTemplate()
    this.round.initPokerList(this.pokerList)
    this.round.initTimeClock(this.timeClock)
    this.round.initNotify(this.notify)
    this.round.initPlayerSupplyRule(this.playerSupplyRule)
    this.round.initBankererSupplyRule(this.bankererSupplyRule)
    this.round.initRoundTime(3000)
    this.round.start()
    this.round.onComplete(() => {console.log('onComplete')})
  }
}

module.exports = Game