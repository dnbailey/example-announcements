const express = require('express')
const router = express.Router()
const Announcement = require('../models/announcements.js')

router.get('/', (req, res) => {
  Announcement.find()
    .then(announcements => res.render('announcements.pug', {announcements}))
    .catch(err => console.log(err))
})

router.post('/', (req, res) => {
  let announcement = new Announcement({
    title: req.body.title
  })
  announcement.save()
  res.redirect('/admin')
})

router.get('/:id/delete', function(req, res){
	Announcement.remove({_id: req.params.id})
		.then(res.redirect('/admin'))
    .catch(err => console.log(err))
})

module.exports = router
