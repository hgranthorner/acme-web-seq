const express = require('express')
const { models } = require('../db')
const { header, body, footer } = require('../views')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))

app.use((req, res, next) => {
  models.Page.findAll({
    attributes: ['title', 'id']
  }).then(titles => {
    req.pageTitles = titles.map(page => {
      return {
        name: page.dataValues.title,
        id: page.dataValues.id
      }
    })
    next()
  })
})

app.get('/', (req, res, next) => {
  res.redirect('/pages/1')
})

app.get('/pages/:id', (req, res, next) => {
  if (req.params.id) {
    models.Page.findByPk(req.params.id, {
      include: [models.Content]
    })
      .then(page => {
        if (!page) res.sendStatus(404)
        const { title, contents } = page
        res.send(header(title, req.pageTitles) + body(contents) + footer())
      })
      .catch(next)
  } else {
    next()
  }
})

module.exports = app
