const config = require('../config')
const { User } = require('../models')

var userController = function (wsController, dbController) {
  this.wsController = wsController
  this.dbController = dbController

  this._cbs = []

  this.on = function (cb) { this._cbs.push(cb) }

  this.mounted = function () {
    this.wsController.on('onConnected', (sk) => {
      // socket就是要含jwt 不然就直接斷線
      // console.log(sk)
    })
  }

  this.mounted()
}
module.exports = userController