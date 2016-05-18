import { Meteor } from 'meteor/meteor';
Meteor.startup(() => {

	var tracker = Npm.require('eye-tribe');
	var interval = 250;

	// tracker.createConnection();
	// Meteor.setInterval(() => {
	// 	coords = tracker.getCoordinates();
	// 	Streamy.broadcast('coords', coords);
	// }, interval);
});
