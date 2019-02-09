const db = require('../db')

const Page = db.define('page', { title: db.Sequelize.STRING })

module.exports = Page
