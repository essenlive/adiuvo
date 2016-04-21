Template.controls.onRendered(function () {
	//semantic ui toggle js
	$('.ui.checkbox').checkbox();
	$('.ui.dropdown').dropdown();

	// Update profile.controller and profile.components values
	Meteor.users.update(Meteor.userId(), {
		$set: { 
			"profile.components": oStatus.update( Meteor.user().profile.components, Meteor.user().profile.status ),
			"profile.controller": oStatus.update( Meteor.user().profile.controller, Meteor.user().profile.status )
		} 
	});

	//Manually change semantic ui toggle value
	//preset toggles values
	$('#components').form('set values', Meteor.user().profile.components );
	$('#controller').form('set values', Meteor.user().profile.controller );
});

Template.controls.events({
	//update the mongo profile on each change

	"change input":function(){
		var controller = $('#controller').form('get values');
		var components = $('#components').form('get values');
		var status = oStatus.update( Meteor.user().profile.status, controller, components);

		Meteor.users.update(Meteor.userId(), {
			$set: { 
				"profile.components": components,
				"profile.controller": controller,
				"profile.status": status
			} 
		});
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
		if (Meteor.user().profile.status.fStatus === 0) return '<i class="pause icon"></i>'
			else { return '<i class="play icon"></i>' }
		},
})
