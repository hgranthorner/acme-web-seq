const app = require('./api/index')
const { initDb } = require('./db')
const port = process.env.PORT || 3000

initDb()
  .then(() => {
    app.listen(port, () => console.log(`Server is listening on ${port}...`))
  })
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
