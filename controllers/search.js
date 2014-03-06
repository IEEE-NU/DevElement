var mongoose = require('mongoose');
var passport = require('passport');
var _ = require('underscore');
var User = require('../models/User');
var Group = require('../models/Group');
var Group = mongoose.model('Group');
var daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var timesOfDay = ["12:00 AM","1:00 AM","2:00 AM","3:00 AM", "4:00 AM", "5:00 AM", "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"];
var group = "";

exports.search = function(req,res){
	res.render('search',{
		title: 'Search',
		daysOfWeek: daysOfWeek,
		error: req.flash('error'),
		success: req.flash('success'),
		groups: group,
		user: req.user,
		timesOfDay: timesOfDay
	});
};

exports.submitSearch = function(req,res){
	Group.find({ $or:[{'meetingLocation':req.body.meetingLocation}, {'course':req.body.course}, {'meetingTime':req.body.meetingTime}, {'meetingDate':req.body.meetingDate}] }, function(err,group){
		if (group == ""){
			req.flash('error', 'Group created.');
			res.redirect('/search');
		} else {
			console.log(req.user);
			console.log(group);
			res.render('search',{
				title: 'Search',
				daysOfWeek: daysOfWeek,
				groups: group,
				error: req.flash('error'),
				user: req.user,
		timesOfDay: timesOfDay
			});
		}
	});
};

exports.addMeToGroup = function(req,res){
	Group.findOne({'_id':req.params.id}, function(err,group){
		group.members.push(req.user);
		group.save();
		req.flash('success', 'Group created.');
		res.render('search',{
			title: 'Search',
			daysOfWeek: daysOfWeek,
			groups: group,
			error: req.flash('error'),
			success: req.flash('success'),
			user: req.user,
		timesOfDay: timesOfDay
		});
	});
};