var mongoose = require('mongoose');
var passport = require('passport');
var _ = require('underscore');
var User = require('../models/User');
var Group = require('../models/Group');
var Group = mongoose.model('Group');

exports.search = function(req,res){
	res.render('search',{
		title: 'Search',
		error: req.flash('error')
	});
};

exports.submitSearch = function(req,res){
	Group.findOne({'course':req.body.course}, function(err,group){
			console.log(group);
		if (group === null){
			req.flash('error', 'Group created.');
			res.redirect('/search');
			console.log('hi');
		} else {
			res.render('search',{
				title: 'Search',
				groups: group
			});
		}
	});
};