/**
 * 引入
 */

var Round = function () {
  this.pokerList = null
  this.timeClock = null
  this.notify = null
  this.playerSupplyRule = null
  this.bankererSupplyRule = null
  
  this.roundTime = 0
  this.roundPool = {}
  this.users = []
  this.state = 0

  var _completeCbs = []

  this.initPokerList = function (pokerList) { this.pokerList = pokerList }
  this.initRoundTime = function (time) { this.roundTime = time}
  this.initTimeClock = function (timeClock) { this.timeClock = timeClock() }
  this.initNotify = function (notify) { this.notify = notify }
  this.initPlayerSupplyRule = function (playerSupplyRule) { this.playerSupplyRule = playerSupplyRule }
  this.initBankererSupplyRule = function (bankererSupplyRule) { this.bankererSupplyRule = bankererSupplyRule }

  this.checkInit = function () {
    if (!this.pokerList) throw new Error('pokerList is null')
    if (!this.timeClock) throw new Error('timeClock is null')
    if (!this.initTimeClock) throw new Error('initTimeClock is 0')
    if (!this.notify) throw new Error('notify is null')
    if (!this.playerSupplyRule) throw new Error('playerSupplyRule is null')
    if (!this.bankererSupplyRule) throw new Error('bankererSupplyRule is null')
  }

  var emitComplete = function () { _completeCbs.map(e => e()) }
  this.onComplete = function (cb) { _completeCbs.push(cb) }

  this.startCountdown = function () {
    this.timeClock.onComplete(() => emitComplete())
    this.timeClock.onChange(e => { console.log('change' + e) })
    this.timeClock.start(this.roundTime)
  }

  this.start = function () {
    this.checkInit()
    this.startCountdown()
  }
}
module.exports = Round