var mongoose = require('mongoose');
var passport = require('passport');
var _ = require('underscore');
var User = require('../models/User');
var Group = require('../models/Group');
var Group = mongoose.model('Group');
var timesOfDay = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"];
var daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

exports.makeGroup = function(req,res){
	Group.find(function(err, groups){
		res.render('makeGroup', {
			title: 'Make Group',
			groups: groups,
			daysOfWeek: daysOfWeek,
			timesOfDay: timesOfDay,
			success: req.flash('success')
		});
	});
};

exports.submitGroup = function(req,res){
	// implement error checking
	var newGroup = new Group({
		course: req.body.course,
	});
	newGroup.meetingTime.push(req.body.meetingDate);
	newGroup.meetingTime.push(req.body.meetingTime);
	newGroup.meetingLocation.push(req.body.location);
	newGroup.members.push(req.user);
	newGroup.save(function(err, groups) {
		req.flash('success', 'Group created.');
		res.redirect('/makeGroup');
	});
};