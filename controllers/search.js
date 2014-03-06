var mongoose = require('mongoose');
var passport = require('passport');
var _ = require('underscore');
var User = require('../models/User');
var Group = require('../models/Group');
var Group = mongoose.model('Group');
var daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var timesOfDay = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"];
var group = "";

exports.search = function(req,res){
	res.render('search',{
		title: 'Find Group',
		daysOfWeek: daysOfWeek,
		error: req.flash('error'),
		success: req.flash('success'),
		groups: group,
		user: req.user,
		timesOfDay: timesOfDay
	});
};

exports.submitSearch = function(req,res){
	Group.find({ $and:[{'course':req.body.course}, {  $or:[ {'meetingTime':[req.body.meetingDate1,req.body.meetingTime1] }, {'meetingTime':[req.body.meetingDate2,req.body.meetingTime2] }, {'meetingTime':[req.body.meetingDate3,req.body.meetingTime3] }, {'meetingTime':[req.body.meetingDate4,req.body.meetingTime4] } ] } ] }, function(err,group){
		if (group == ""){
			if (req.body.course != ""){
				Group.find( {'course':req.body.course},  function(err,thing){
					if (thing == ""){
						req.flash('error', 'Group created.');
						res.redirect('/search');
					}
					else{
						res.render('search',{
						title: 'Find Group',
						daysOfWeek: daysOfWeek,
						groups: thing,
						error: req.flash('error'),
						user: req.user,
						timesOfDay: timesOfDay
						});
					}
				});
			}
			else{
				req.flash('error', 'Group created.');
				res.redirect('/search');
			}
		} else {
			res.render('search',{
				title: 'Find Group',
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
			title: 'Find Group',
			daysOfWeek: daysOfWeek,
			groups: group,
			error: req.flash('error'),
			success: req.flash('success'),
			user: req.user,
		timesOfDay: timesOfDay
		});
	});
};