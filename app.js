const express = require('express')
const path = require('path')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use('/', require('./routes/index.js'))

app.listen('3000', () => {
  console.log('Listening on port 3000')
})
