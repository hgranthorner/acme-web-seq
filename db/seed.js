const { Page, Content } = require('./models/index')
const { initDb } = require('./index')

initDb(true)
  .then(() => {
    const createPage = Page.create({ title: 'Home' })

    const createContent = Promise.all([
      Content.create({
        title: 'Welcome Home 1',
        content: 'xoxoxo'
      }),
      Content.create({
        title: 'Welcome Home 2',
        content: 'xoxoxo'
      })
    ])

    return Promise.all([createPage, createContent])
  })
  .then(([page, content]) => {
    return page.setContents(content)
  })
  .then(() => {
    const createPage = Page.create({ title: 'Employees' })

    const createContent = Promise.all([
      Content.create({
        title: 'MOE',
        content: 'CEO'
      }),
      Content.create({
        title: 'LARRY',
        content: 'CTO'
      }),
      Content.create({
        title: 'CURLY',
        content: 'COO'
      })
    ])

    return Promise.all([createPage, createContent])
  })
  .then(([page, content]) => {
    return page.setContents(content)
  })
  .then(() => {
    const createPage = Page.create({ title: 'Contact' })

    const createContent = Promise.all([
      Content.create({
        title: 'Phone',
        content: '212-555-1212'
      }),
      Content.create({
        title: 'Telex',
        content: '212-555-1213'
      }),
      Content.create({
        title: 'FAX',
        content: '212-555-1214'
      })
    ])

    return Promise.all([createPage, createContent])
  })
  .then(([page, content]) => {
    return page.setContents(content)
  })
  .then(() => {
    console.log('Db seeded.')
    process.exit(0)
  })
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
