Template.speed.helpers({
	speed: function(){
		var state = State.findOne({name: 'state'})
		return state && state.status.speed;
	},
})
