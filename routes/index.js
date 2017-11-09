var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  console.log(req.body.title)
  res.render('index')
})

module.exports = router
