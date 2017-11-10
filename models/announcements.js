const mongoose = require('mongoose')

let announcementSchema = new mongoose.Schema({
  title: String
})

module.exports = mongoose.model('Announcement', announcementSchema);
