Meteor.startup(function(){

	State.remove({});
	State.insert({
		name : 'state',
		globals : {
			srcRoot: "https://s3.eu-central-1.amazonaws.com/adiuvobucket",
		},
		controller : {
			scenario : "4",
		},
		status : {
			scenario : "4",
			goToTime : 0,
			currentTime : 0,
			duration : 20,
			status : 1,
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
