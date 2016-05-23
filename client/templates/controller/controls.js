Template.controls.onRendered(function () {
	//semantic ui toggle js
	$('.ui.checkbox').checkbox();
	$('.ui.dropdown').dropdown();

	// Update profile.controller and profile.components values
	var state = State.findOne({name: 'state'});
	if (state) {
		Meteor.call('updateState',oStatus.update( state.controller, state.status ));
		$('#controller').form('set values', state.controller );
	}

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

});

Template.controls.helpers({
	footageStatus: function(){
		var state = State.findOne({name: 'state'});
		if (state && state.status.fStatus === 0 ) return '<i class="pause icon"></i>'
			else { return '<i class="play icon"></i>' }
		},
})
