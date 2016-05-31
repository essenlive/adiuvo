Meteor.methods({

	togglePlay : function(){
		var state = State.findOne({name: 'state'});
		var pause = Boolean((state.controller.pause + 1 ) % 2);
		// pause
		if ( pause) { Meteor.call('pause');	}
		// play
		else{  Meteor.call('play');	}


	},

	pause :  function(){
		console.log("-- pause");
		var state = State.findOne({name: 'state'});
		Meteor.call('updateState', {"controller.pause": true } );
		if (typeof footageTime !== 'undefined') {
			Meteor.clearInterval(footageTime);
		};
	},

	play :  function(){
		console.log("-- play");
		var state = State.findOne({name: 'state'});
		Meteor.call('updateState', {"controller.pause": false} );
		if (typeof footageTime !== 'undefined') {
			Meteor.clearInterval(footageTime);
		}
		Meteor.call( 'loadEvents' );
	},

	loadEvents : function(){
		var interval = 25;

		//Master timeline
		console.log("-- loadEvent");

		var state = State.findOne({name: 'state'});
		var eventIndex = 0;
		var events = Events.find(
			{scenarioId: state.status.scenario, arriveTime: {$gte: state.status.currentTime}},
			{sort: { arriveTime: 1 }}
			).fetch();

		console.log("-----");
		console.log(events );
		console.log("-----");

		var ct = State.findOne({name: 'state'}).status.currentTime;
		footageTime = Meteor.setInterval( function(){

			//Master timeline
			Meteor.call('updateState',{"status.currentTime" : ct });
			ct += interval / 100;	

			if ( events.length > eventIndex && ct>events[eventIndex].arriveTime ) {

				//LEDs events
				if (events[eventIndex].type === 'led') {

					var zones = [
					"000196",	/*none*/
					"151161",	/*top left*/
					"138150",	/*mid left*/
					"105137",	/*bottom left*/
					"083104",	/*middle left*/
					"060082",	/*middle right*/
					"026059",	/*bottom right*/
					"013025",	/*mid right*/
					"000012",	/*top right*/ 
					"162171",	/*left mirror*/
					"172185",	/*rear mirror*/
					"186196"	/*right mirror*/
					];
					var colors = [
					"050000000000",	/*red*/
					"050000000050",	/*orange*/
					"000050000000",	/*green*/
					"050000000050"	/*white*/
					];

					//Creating Serial message
					console.log("LED event : ");
					console.log(events[eventIndex]);
					var pad = "000"
					var animation = "" + events[eventIndex].animation;
					var zone = "" + zones[events[eventIndex].zone];
					var duration = "" + events[eventIndex].duration * 10;
					duration = pad.substring(0, pad.length - duration.length) + duration;
					var color = "" + colors[events[eventIndex].color];

					var message = animation + zone + duration + color + "."; 
					Meteor.call("sendToLed", message );

					//Defining LED zone	
					var activeZone = events[eventIndex].zone;
					Meteor.call('updateState',{"status.ledZone" : activeZone });	
					Meteor.setTimeout(function(){
						Meteor.call('updateState',{"status.ledZone" : 0 });	
					}, events[eventIndex].duration * 1000 );
				}


				//Street names events
				if (events[eventIndex].type === 'street') {
					
					console.log("street event : ");
					console.log(events[eventIndex]);
					Meteor.call('updateState',{
						"status.street" : {
							name : events[eventIndex].name,
							src : events[eventIndex].filename,
							visible : true,
						}
					});
					Meteor.setTimeout(function(){ 
						Meteor.call('updateState',{"status.street.visible" : false });
					},  
					events[eventIndex].duration * 1000
					);
				}

				eventIndex++;
			}



		}, interval * 10 );
	},

	goTo : function(timeIndex){
		Meteor.call('updateState', { "controller.goToTime": true, "status.currentTime" : timeIndex} );
		Meteor.call('pause');
		Meteor.setTimeout(function(){
			Meteor.call('updateState', { "controller.goToTime": false} );
		}, 250);

		console.log('-- goTo : ' + timeIndex);

	},

	loadScenario : function(scenario, duration){
		Meteor.call('updateState', {
			"status": {
				scenario : scenario,
				currentTime : 0,
				ledZone : 0,
				duration : duration,
				street : {
					name : "default",
					src : "",
					visible : false,
				}

			},
			"controller": {
				scenario : scenario,
				pause : true,
				goToTime : false,
			}
		});
		Meteor.call('goTo', 0);
		console.log('-- load scenario : ' + scenario);

	},

});