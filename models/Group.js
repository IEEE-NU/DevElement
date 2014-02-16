var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');

var groupSchema = new mongoose.Schema({
  numbers: { type: Array},
  course: { type: String},
  meetingTime: { type: String},
  meetingDate: {type: String},
  meetingLocation: {type: String}
});

module.exports = mongoose.model('Group', groupSchema);
