var mongoose = require('mongoose');
var passport = require('passport');
var _ = require('underscore');
var User = require('../models/User');
var Group = require('../models/Group');
var Group = mongoose.model('Group');
var daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

exports.makeGroup = function(req,res){
	Group.find(function(err, groups){
		console.log(groups)
		res.render('makeGroup', {
			title: 'Make Group',
			groups: groups,
			daysOfWeek: daysOfWeek,
			success: req.flash('success')
		});
	});
};

exports.submitGroup = function(req,res){
	console.log(req.body);
	var newGroup = new Group({
		members: req.user.id,
		course: req.body.course,
		meetingTime: req.body.meetingTime,
		meetingDate: req.body.meetingDate
	});
	newGroup.meetingLocation.push(req.body.location);
	newGroup.save(function(err, groups) {
		req.flash('success', 'Group created.');
		res.redirect('/makeGroup');
	});
};