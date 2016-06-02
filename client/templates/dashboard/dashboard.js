Template.dashboard.helpers({

	watched: function(){
		var state = State.findOne({name: 'state'})
		return state && state.status.dashEye;
	},
});
