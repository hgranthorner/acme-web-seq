const { initDb } = require('./db/index')

initDb()
  .then(() => {
    console.log('Db is connected!')
  })
  .catch(() => {
    console.log('InitDb in index failed!')
  })
