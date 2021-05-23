const Sequelize = require('sequelize')
require('dotenv').config() // TODO Refactor

// database username password
const sequelize = new Sequelize(
  process.env.DB_NAME, // TODO Refactor
  process.env.DB_USER, // TODO Refactor
  process.env.DB_PASSWORD, // TODO Refactor
  {
    logging: false, // TODO Refactor
    operatorsAliases: false, // TODO Logics
    host: 'localhost',
    port: process.env.DB_PORT, // TODO Logics
    dialect: 'postgres',
  },
)

sequelize
  .authenticate() // TODO Logics
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(`Error: ${err}`))

module.exports = sequelize // TODO Compilation
