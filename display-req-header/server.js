const express = require('express')
const app = express()
const PORT = 8081

// app.use(express.json())

app.get('/users/:userId/books/:bookId', (req, res, next) => {
  res.send(req.params)
})

app.get('/example/a', (req, res) => {
  res.send('Hello from A!')
})

app.get('/example/b', (req, res, next) => {
  console.log('the response will be sent by the next function ...');
  next()
}, (req, res, next) => {
  console.log('You are not reaching B yet ...')
  next()
}, (req, res) => {
  res.send('Hello from B!')
})

var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

var cb2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])

app.listen(PORT, (req, res) => {
  console.log("Server running at port " + PORT);
})