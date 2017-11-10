const express = require('express')
const router = express.Router()
const Announcement = require('../models/announcements.js')

router.get('/', (req, res) => {
  Announcement.find((err, announcements) => {
    if (err) throw err;
    res.render('announcements.pug', {'announcements': announcements});
  })
})

router.post('/', (req, res) => {
  let announcement = new Announcement({
    title: req.body.title
  })
  announcement.save()
  res.redirect('/announcements')
})

module.exports = router
