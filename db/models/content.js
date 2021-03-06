const db = require('../db')

const Content = db.define(
  'content',
  {
    title: db.Sequelize.STRING,
    content: db.Sequelize.STRING
  },
  {
    name: {
      singular: 'content',
      plural: 'contents'
    }
  }
)

module.exports = Content
