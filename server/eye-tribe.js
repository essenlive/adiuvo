import { Meteor } from 'meteor/meteor';
Meteor.startup(() => {

Override Meteor._debug to filter for custom msgs
Meteor._debug = (function (super_meteor_debug) {
  return function (error, info) {
    if (!(info && _.has(info, 'msg')))
      super_meteor_debug(error, info);
  }
})(Meteor._debug);

	var tracker = Npm.require('eye-tribe');
	var interval = 250;

	tracker.createConnection();
	Meteor.setInterval(() => {
		coords = tracker.getCoordinates();
		Streamy.broadcast('coords', coords);
	}, interval);
});