Meteor.startup(function(){

	State.remove({});
	State.insert({
		name : 'state',
		globals : {
			srcRoot: "https://s3.eu-central-1.amazonaws.com/adiuvobucket",
		},
		components : {
			cSpeedActive: false,
			cStreetActive: false,
			cStreetName: "main street",
			cDistance: "500 m",
			cAlertActive: false,
			cAlertMessage: "Brake!",
			cVoiceActive : true,
			cVoiceMessage: "Brake!",
			cVoiceControlActive: false,
			cNavigationActive: false,
			cNavigationDirection: "wN-left",
		},
		controller : {
			fScenario : "1",
			fCurrentTime : 0,
			fStatus : 0,
		},
		status : {
			cSpeedActive: false,
			cStreetActive: false,
			cStreetName: "main street",
			cDistance: "500 m",
			cAlertActive: false,
			cAlertMessage: "Brake!",
			cVoiceActive : true,
			cVoiceMessage: "Brake!",
			cVoiceControlActive: false,
			cNavigationActive: false,
			cNavigationDirection: "wN-left",
			fScenario : "1",
			fCurrentTime : 0,
			fStatus : 0,
		}
	});

});



Meteor.methods({

	updateComponents: function (components) {
		State.update({name: "state"}, { 
			$set: { 
				"components": components,
			}
		});
	},
	updateController: function (controller) {
		State.update({name: "state"}, { 
			$set: { 
				"controller": controller,
			}
		});
	},
	updateStatus: function (status) {
		State.update({name: "state"}, { 
			$set: { 
				"status": status,
			}
		});
	},
});