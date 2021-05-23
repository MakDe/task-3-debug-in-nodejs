const express = require('express') // TODO Refactor
const app = express() // TODO Refactor
const db = require('./db') // TODO Refactor
const user = require('./controllers/usercontroller') // TODO Refactor
const game = require('./controllers/gamecontroller') // TODO Refactor

db.sync()
app.use(express.urlencoded({ extended: false }))
app.use(express.json()) // TODO logics
app.use('/api/auth', user)
app.use(require('./middleware/validate-session'))
app.use('/api/game', game)
app.listen(process.env.SERVER_PORT, () => {
  // TODO logics
  console.log(`App is listening on ${process.env.SERVER_PORT}`)
})
