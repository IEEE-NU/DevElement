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
		success: req.flash('success'),
		groups: group,
		user: req.user
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
				user: req.user
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
			user: req.user
		});
	});
};