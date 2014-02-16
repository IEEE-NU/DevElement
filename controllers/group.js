var mongoose = require('mongoose');
var passport = require('passport');
var _ = require('underscore');
var User = require('../models/User');
var Group = require('../models/Group');

exports.makeGroup = function(req,res){
	res.render('makeGroup', {
		title: 'Make Group'
	});
};

exports.submitGroup = function(req,res){
	var newGroup = new Group({
		members: req.user.id,
		course: req.params.course,
		meetingLocation: req.params.location,
		meetingTime: req.params.meetingTime,
		meetingDate: req.params.meetingDate
	});
	newGroup.save();
};