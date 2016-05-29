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
});
