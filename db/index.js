const db = require('./db')
const { Page, Content } = require('./models')

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

process.exit(0)
