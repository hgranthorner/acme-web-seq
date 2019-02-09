const { Page, Content } = require('./models/index')
const initDb = require('./index')

initDb(true)
  .then(() => {
    const createPage = Page.create({ title: 'Home' })

    const createContent = Promise.all([
      Content.create({
        title: 'ContentTitle1',
        content: 'ContentContent1'
      }),
      Content.create({
        title: 'ContentTitle2',
        content: 'ContentContent2'
      })
    ])

    return Promise.all([createPage, createContent])
  })
  .then((page, content) => {
    return page.setContent(content)
  })
  .then(() => {
    console.log('Db seeded.')
    process.exit(0)
  })
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
