Meteor.methods({

	togglePlay :  function(){

		var state = State.findOne({name: 'state'}).status;
		status = (state.status + 1 ) % 2;
		Meteor.call('updateState', {"status.status": status } );

		var events = Events.find(
			{scenarioId: state.scenario},
			{sort: { arriveTime: 1 }}
			).fetch();

		var eventIndex = 0;

		if ( status === 1 ) {
			Meteor.clearInterval(footageTime);
		}
		if ( status === 0 ) {


			if (typeof footageTime !== 'undefined') {
				Meteor.clearInterval(footageTime);
			}
			var ct = State.findOne({name: 'state'}).status.currentTime;
			footageTime = Meteor.setInterval( function(){
				Meteor.call('updateState',{"status.currentTime" : ct });
				ct += 0.25;	

				if ( events.length > eventIndex && ct>events[eventIndex].arriveTime ) {
					console.log(events[eventIndex]);

					if (events[eventIndex].type === 'led') {
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



						var message = 
						animation + 
						startLed + 
						endLed + 
						duration + 
						colorRed + 
						colorGreen + 
						colorBlue + 
						colorWhite + 
						"."; 
						console.log(message);

						Meteor.call("sendToLed", message );
					}


					eventIndex++;
				}



			}, 250);

		}

	},

	goTo : function(timeIndex){

		var state = State.findOne({name: 'state'}).status;
		goToTime = timeIndex;
		Meteor.call('updateState', {"status.goToTime": goToTime, "status.goToTime": goToTime, "status.status": 1 } );

	},

	loadScenario : function(scenario, duration){
		Meteor.call('updateState', {
			"status": {
				scenario : scenario,
				goToTime : 0,
				currentTime : 0,
				duration : duration,
				status : 1,

			},
			"controller.scenario": scenario
		});
	},

});