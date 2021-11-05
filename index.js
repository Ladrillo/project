require('dotenv').config()
const express = require('express')

const server = express()

server.use(express.json())

server.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'foo'},
    { id: 2, name: 'bar'},
    { id: 3, name: 'baz'},
  ])
})

const port = process.env.PORT

server.listen(port, () => {
  console.log(`listening on ${port}`)
})
