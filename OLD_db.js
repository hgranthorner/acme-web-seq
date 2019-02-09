function initDb() {
  return db
    .authenticate()
    .then(() => {
      Pages.create({ title: 'Home' })
        .then(page => {
          console.log('Created record: ', page.dataValues)
        })
        .catch(() => console.log('Failed to create record.'))

      db.sync({ force: true })
        .then(() => console.log('Synced db'))
        .catch(e => console.error(e))
    })
    .then(() => {
      console.log('Set up associations')
    })
    .catch(e => console.error(e))
}

function syncAndSeed() {
  // Pages.bulkCreate({ title: 'Home' }, { title: 'Employees' }, { title: 'Contact' })
  //   .then(() => Pages.findAll())
  //   .then(pages => console.log('Created records: ', pages))
  //   .catch(() => console.log('Failed to create records.'))
}

initDb()
