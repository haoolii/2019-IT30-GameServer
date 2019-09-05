const test = require('./test')
const { ws } = require('./api')
const game = require('./game')

const express = require('express')
const app = express()
const http = require('http').createServer(app)
const port = process.env.PORT || 3000

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/casino/index.html')
})

app.get('/admin', function (req, res) {
  res.sendFile(__dirname + '/views/admin/index.html')
})

app.get('/test', function (req, res) {
  res.sendFile(__dirname + '/views/test/index.html')
})

app.get('*', function (req, res) {
  res.status(404).sendFile(__dirname + '/views/404.html')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = function () {
  console.log('server running')
  game()
  ws(http)
}