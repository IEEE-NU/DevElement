var mongoose = require('mongoose');
var passport = require('passport');
var _ = require('underscore');
var User = require('../models/User');
var Group = require('../models/Group');
var Group = mongoose.model('Group');

exports.search = function(req,res){
	Group.findOne({'course':'EECS 211'}, 'course meetingLocation meetingTime meetingDate', function(err,group){
		res.render('search',{
		title: 'Search',
		groups: group
	});
	});
};

exports.submitSearch = function(req,res){
	console.log('hi');
};