const Sequelize = require('sequelize')
const config = require('../../config/config.json')

let dbConfig = ''

process.env.NODE_ENV
  ? (dbConfig = config.production)
  : (dbConfig = config.development)

const sequelize = new Sequelize(dbConfig)

module.exports = sequelize
