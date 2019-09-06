const config = require('../config')
const { User } = require('../models')
const jwt = require('jsonwebtoken')

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


  // var token = jwt.sign({ foo: 'bar' }, '878787')
  // console.log(token)

  this.mounted()
  console.log('mounteddd')
}
module.exports = userController