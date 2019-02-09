const Sequelize = require('sequelize')

module.exports = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_web_seq', {
  dialect: 'postgres',
  logging: false
})
