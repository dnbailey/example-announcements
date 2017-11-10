const express = require('express')
const router = express.Router()
const Announcement = require('../models/announcements.js')

router.get('/', (req, res) => {
  Announcement.find((err, announcements) => {
    if (err) throw err;
    res.render('index.pug', { "announcements": announcements });
  })
})

module.exports = router
