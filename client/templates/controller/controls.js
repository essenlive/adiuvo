Template.controls.onRendered(function () {
	//semantic ui toggle js
	$('.ui.checkbox').checkbox();
	$('.ui.dropdown').dropdown();

	// Update profile.controller and profile.components values


	setTimeout(function(){
		var state = State.findOne({name: 'state'});
		if (state) {
			var fScenario = oStatus.update( state.controller, state.status );
			Meteor.call('updateState', {"controller.fScenario": fScenario });
			$('#controller').form('set values', state.controller );
		}
	}, 500);

});

Template.controls.events({
	//update the mongo profile on each change

	"change input":function(){
		var fScenario =  $('#controller').form('get values').fScenario;

		Meteor.call('updateState', {"status.fScenario": fScenario } );
		Meteor.call('updateState', {"controller.fScenario": fScenario } );

	},
	'click #toggle-footage': function () {
		footageControls.togglePlay();
	},
	'click #restart-footage': function () {
		footageControls.goTo(0);
	},
	'click #add-street': function(e) {
		e.preventDefault();

		var state = State.findOne({name: 'state'});
		var event = {
			type: "street",
			name: "default street",
			filename: "street.jpg",
			arriveTime: 0,
			scenarioId: state.status.fScenario
		};
		console.log("submit " + event);

		Meteor.call('eventInsert', event, function(error, result) {
			if (error)
				console.log(error);
		});
	},
	'click #add-led': function(e) {
		e.preventDefault();

		var state = State.findOne({name: 'state'});
		var event = {
			type: "led",
			color: "0000",
			animation: 0,
			startLed: 0,
			endLed: 100,
			arriveTime: 0,
			duration: 100,
			scenarioId: state.status.fScenario
		};
		Meteor.call('eventInsert', event, function(error, result) {
			if (error)
				console.log(error);
		});
	},

});

Template.controls.helpers({
	footageStatus: function(){
		var state = State.findOne({name: 'state'});
		if (state && state.status.fStatus === 0 ) return '<i class="pause icon"></i> Pause'
			else { return '<i class="play icon"></i> Play' }
		},
	events: function() {
		var state = State.findOne({name: 'state'});
		if (state && state.status.fScenario ) 
			return Events.find(
				{scenarioId: state.controller.fScenario},
				{sort: { arriveTime: 1 }},
				);
	},
})
