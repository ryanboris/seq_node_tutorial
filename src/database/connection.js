const Sequelize = require('sequelize')

const pg = 'postgres'

const sequelize = new Sequelize(pg, pg, pg, {
  host: '127.0.0.1',
  dialect: 'postgres'
})

module.exports = sequelize
global.sequelize = sequelize
