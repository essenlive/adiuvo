Template.streetNames.helpers({
	streetName: function(){
		var state = State.findOne({name: 'state'});
		return state && state.status.wStreetName;
	},
	distance: function(){
		var state = State.findOne({name: 'state'});
		return state && state.status.wDistance;
	},
})
