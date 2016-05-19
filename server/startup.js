Meteor.startup(function(){

	State.remove({});
	State.insert({
		name : 'state',
		globals : {
			srcRoot: "https://s3.eu-central-1.amazonaws.com/adiuvobucket",
		},
		controller : {
			fScenario : "1",
		},
		status : {
			fScenario : "1",
			fCurrentTime : 0,
			fStatus : 0,
		}
	});

});



Meteor.methods({

	updateState: function ( doc) {
		State.update({name: "state"}, { 
			$set: doc
		});
	},
});