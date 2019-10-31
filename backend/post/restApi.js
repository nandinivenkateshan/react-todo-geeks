const express = require('express')
//const bodyParser = require('body-parser')
const db = require('./redisQuery')

const app = express()
const port = 3000
app.use(express.static('../script'))
app.use(express.json())

// app.use(express.urlencoded({
//   extended: true
// }))
app.get('/todos', db.getTodo)

app.listen(port, () => console.log(`App running on the port ${port}`))

