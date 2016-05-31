import { Meteor } from 'meteor/meteor';
Meteor.startup(() => {
	var tracker = Npm.require('eye-tribe');
	var interval = 250;
	var screenW = 1920;
	var screenH = 1080;

	tracker.createConnection();
	Meteor.setInterval(() => {
		if ( typeof tracker.getCoordinates() !== 'undefined' ) {
			coords = tracker.getCoordinates();
			var zone = -1;
			var yp = coords.y / screenH * 100;
			var xp = coords.x / screenH * 100;
			if ( xp === 0 && yp === 0 ) zone = -1;
			else {
				if ( xp > 75 && xp <= 100 ) {
					if ( yp > 66 && yp <= 100 ) zone = 8;
					if ( yp > 33 && yp <= 66 ) zone = 7;
					if ( yp > 0 && yp <= 33 ) zone = 6;
				}
				else if ( xp > 50 && xp <= 75 && yp > 66  ) zone = 5;
				else if ( xp > 25 && xp <= 50 && yp > 66 ) zone = 4;
				else if ( xp > 0 && xp <= 25 ) {
					if ( yp > 66 && yp <= 100 )	zone = 3;
					if ( yp > 33 && yp <= 66 ) zone = 2;
					if ( yp > 0 && yp <= 33 ) zone = 1;		
				}
				else zone = 10;
			}

			var state = State.findOne({name: 'state'});
			var ledZone = state && state.status.ledZone;
			if ( zone === ledZone ) {
				Meteor.call("seen");
				console.log("led seen")
			}

			Streamy.broadcast('coords', coords);

		}
	}, interval);

});