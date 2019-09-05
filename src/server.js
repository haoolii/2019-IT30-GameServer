var test = require('./test')

const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = function () {
  console.log('server running')
  // test()
}