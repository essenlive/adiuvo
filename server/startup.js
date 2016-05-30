Meteor.startup(function(){

	State.remove({});
	State.insert({
		name : 'state',
		globals : {
			srcRoot: "https://s3.eu-central-1.amazonaws.com/adiuvobucket",
		},
		controller : {
			scenario : "4",
			goToTime : false,
			pause : true,
		},
		status : {
			scenario : "4",
			currentTime : 0,
			duration : 20,
			street : {
				name : "",
				src : "",
				visible : false,
			}
		},
		scenarios : [
		{
			name : "Overtaking in the city",
			index : 1
		},
		{
			name : "Maneuvering in the city",
			index : 3
		},
		{
			name : "Cyclist overtaking",
			index : 4
		},
		]
	});
});



Meteor.methods({

	updateState: function ( doc) {
		State.update({name: "state"}, { 
			$set: doc
		});
	},
	eventInsert: function(event) {
		Events.insert(event);
	},
});
