// import { Meteor } from 'meteor/meteor';
// Meteor.startup(() => {
// 	var tracker = Npm.require('eye-tribe');
// 	var interval = 500;
// 	var screenW = 1920;
// 	var screenH = 1080;
// 	var getZone = function (x, y, sW, sH) {
// 		var zone = -1;
// 		var grid = 
// 		[
// 		[1, 	10, 	10, 	8],
// 		[2, 	10, 	10, 	7],
// 		[3, 	4, 		5, 		6]
// 		]
// 		if (x > 0 && y > 0) {
// 			indexX = Math.ceil(x / ( sW / grid[0].length )) - 1;
// 			indexY = Math.ceil(y / ( sH / grid.length )) - 1;
// 			zone = grid[indexY][indexX];
// 		}
// 		console.log("zone :" + zone);
// 		return zone;
// 	}

// 	tracker.createConnection();
// 	Meteor.setInterval(() => {
// 		if ( typeof tracker.getCoordinates() !== 'undefined' ) {
// 			coords = tracker.getCoordinates();
// 			var zone = getZone(coords.x, coords.y, screenW, screenH);


// 			var state = State.findOne({name: 'state'});
// 			var ledZone = state && state.status.ledZone;

// 			// stop animation when looking at alert
// 			if ( ledZone > 0 ) {
// 				if ( zone === ledZone ) {
// 					Meteor.call("seen");
// 					console.log("frame seen")
// 				}
// 			// stop animation when looking at mirror
// 			if( zone === -1 && ledZone > 8 ) {
// 				Meteor.call("seen");
// 				console.log("mirror seen")
// 			}
// 		}

// 		Update if lookig on dashboard
// 		if (zone === -1) Meteor.call('updateState',{"status.dashEye" : true });
// 		else Meteor.call('updateState',{"status.dashEye" : false });


// 		Streamy.broadcast('coords', coords);

// 	}
// }, interval);

// });
