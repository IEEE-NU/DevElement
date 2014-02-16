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
	console.log(req.body);
	var newGroup = new Group({
		members: req.user.id,
		course: req.body.course,
		meetingTime: req.body.meetingTime,
		meetingDate: req.body.meetingDate,
		meetingLocation: req.body.location
	});
	newGroup.save(function(err) {
		req.flash('success', 'Group created.');
		res.redirect('/');
	});
};