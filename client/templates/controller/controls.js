Template.controls.onRendered(function () {
	//semantic ui toggle js
	$('.ui.checkbox').checkbox();
	$('.ui.dropdown').dropdown();

	// Update profile.controller values
	Meteor.call('updateController',oStatus.update( State.findOne({name: 'state'}).controller, State.findOne({name: 'state'}).status ));

	//Manually change semantic ui toggle value
	//preset toggles values
	$('#controller').form('set values', State.findOne({name: 'state'}).controller );
});

Template.controls.events({
	//update the mongo profile on each change

	"change input":function(){
		var fStatus =  $('#controller').form('get values');
		var status = oStatus.update( State.findOne({name: 'state'}).status, controller);
        console.log('calling update controller');
		Meteor.call('updateController',controller);
        console.log('calling update status');
        status.fScenario = fStatus.fScenario;
		Meteor.call('updateStatus', status);
        var state = State.findOne({name: 'state'}).status;
        console.log(state);
	},
	'click #toggle-footage': function () {
		footageControls.togglePlay();
	},
	'click #restart-footage': function () {
		// footageControls.goTo(0);
	},

});

Template.controls.helpers({
	footageStatus: function(){
		var state = State.findOne({name: 'state'});
		if (state && state.status.fStatus === 0) return '<i class="pause icon"></i>'
			else { return '<i class="play icon"></i>' }
		},
    events: function() {
		var state = State.findOne({name: 'state'});
        return Events.find({scenarioId: state.status.fScenario});
    },
})
