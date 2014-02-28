var mongoose = require('mongoose');
var passport = require('passport');
var _ = require('underscore');
var User = require('../models/User');
var Group = require('../models/Group');
var Group = mongoose.model('Group');
var daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var group = "";

exports.search = function(req,res){
	res.render('search',{
		title: 'Search',
		daysOfWeek: daysOfWeek,
		error: req.flash('error'),
		groups: group
	});
};

exports.submitSearch = function(req,res){
	Group.find({ $or:[{'meetingLocation':req.body.meetingLocation}, {'course':req.body.course}, {'meetingTime':req.body.meetingTime}] }, function(err,group){
		if (group == ""){
			req.flash('error', 'Group created.');
			res.redirect('/search');
			console.log('hi');
		} else {
			res.render('search',{
				title: 'Search',
				daysOfWeek: daysOfWeek,
				groups: group,
				error: req.flash('error')
			});
			console.log('bye');
		}
	});
};