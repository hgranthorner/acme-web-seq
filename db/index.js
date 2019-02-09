const db = require('./db')
const { Page, Content } = require('./models/index')

const initDb = (force = false) => {
  return db
    .authenticate()
    .then(() => {
      Page.hasMany(Content)
      Content.belongsTo(Page)

      return db.sync({ force })
    })
    .catch(() => console.log('initDb failed'))
}

module.exports = {
  initDb,
  models: {
    Page,
    Content
  }
}
