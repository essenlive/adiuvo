Template.street.onRendered(function(){
	Tracker.autorun(function() {
		var state = State.findOne({name: 'state'});
		var animationLength = state && state.status.street.animationLength;
		console.log( state && state.status.street.change );
		if ( state && state.status.street.change ) {
			$(".outer").css("animation", "grow " + animationLength + "s ease");
			Meteor.call('updateState',{"status.street.change" : false });
			console.log($(".outer").css("animation"));
		}
	});
});
Template.street.helpers({
	name: function(){
		var state = State.findOne({name: 'state'})
		return state && state.status.street.name;
	},
	src: function(){
		var state = State.findOne({name: 'state'})
		return state && state.status.street.src;
	},
	street_name: function(){
		var state = State.findOne({name: 'state'})
		return state && state.status.street.name.replace(' ', '_');
	},
	visible: function(){
		var state = State.findOne({name: 'state'})
		return state && state.status.street.visible;
	},
	duration: function(){
		var state = State.findOne({name: 'state'})
		return state && state.status.street.duration;
	},
});
