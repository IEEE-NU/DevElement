var mongoose = require('mongoose');
var passport = require('passport');
var _ = require('underscore');
var User = require('../models/User');
var Group = require('../models/Group');
var Group = mongoose.model('Group');
var daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

exports.search = function(req,res){
	var results = Group.findOne({ 'course': 'EECS 211'});
	results.select('course meetingLocation meetingTime meetingDate');
	

	results.exec(function(err,group){
		res.render('search',{
		title: 'Search',
		groups: group
	});
	});
};

exports.submitSearch = function(req,res){
	var results = Group.findOne({ 'course': 'EECS 211'});
	results.select('course meetingLocation meetingTime meetingDate');

	results.exec(function(err,group) {
		res.render('search', {
		title: 'Search',
		groups: group
	});
	});
};