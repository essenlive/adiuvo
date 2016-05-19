Meteor.startup(function(){

	State.remove({});
	State.insert({
		name : 'state',
		globals : {
			srcRoot: "https://s3.eu-central-1.amazonaws.com/adiuvobucket",
		},
		components : {
			cStreetActive: false,
			cStreetName: "main street",
			cDistance: "500 m",
		},
		controller : {
			fScenario : "1",
			fCurrentTime : 0,
			fStatus : 0,
		},
		status : {
			cStreetActive: false,
			cStreetName: "main street",
			cDistance: "500 m",
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
  signInsert: function(sign) {
    var signId = Signs.insert(sign);
      return {
        _id: signId
      };
  },
});
