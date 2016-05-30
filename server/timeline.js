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

					console.log("LED event : ");
					console.log(events[eventIndex]);
					var pad = "000"
					var animation = "" + events[eventIndex].animation;
					var startLed = "" + events[eventIndex].startLed;
					startLed = pad.substring(0, pad.length - startLed.length) + startLed;
					var endLed = "" + events[eventIndex].endLed;
					endLed = pad.substring(0, pad.length - endLed.length) + endLed;
					var duration = "" + events[eventIndex].duration * 10;
					duration = pad.substring(0, pad.length - duration.length) + duration;
					var colorRed = "" + events[eventIndex].colorRed * 10;
					colorRed = pad.substring(0, pad.length - colorRed.length) + colorRed;
					var colorGreen = "" + events[eventIndex].colorGreen * 10;
					colorGreen = pad.substring(0, pad.length - colorGreen.length) + colorGreen;
					var colorBlue = "" + events[eventIndex].colorBlue * 10;
					colorBlue = pad.substring(0, pad.length - colorBlue.length) + colorBlue;
					var colorWhite = "" + events[eventIndex].colorWhite * 10;
					colorWhite = pad.substring(0, pad.length - colorWhite.length) + colorWhite;

					var message = animation + startLed + endLed + duration + colorRed + colorGreen + colorBlue + colorWhite + "."; 
					console.log(message);

					Meteor.call("sendToLed", message );
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