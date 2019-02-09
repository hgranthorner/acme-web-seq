const initDb = require('./db')

initDb()
  .then(() => {
    console.log('Db is connected!')
  })
  .catch(() => {
    console.log('InitDb in index failed!')
  })
