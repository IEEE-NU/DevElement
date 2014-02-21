var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');

var groupSchema = new mongoose.Schema({
  members: { type: Array},
  course: { type: String},
  meetingTime: { type: String},
  meetingDate: {type: String},
  meetingLocation: [String]
});

module.exports = mongoose.model('Group', groupSchema);
