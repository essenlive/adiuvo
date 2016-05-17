Template.dashboard.helpers({
	wEmirrorsActive: function(){
		var state = State.findOne({name: 'state'});
		return state && state.status.wEmirrorsActive;
	},
	wTopViewActive: function(){
		var state = State.findOne({name: 'state'});
		return state && state.status.wTopViewActive;
	},
	wHoodViewActive: function(){
		var state = State.findOne({name: 'state'});
		return state && state.status.wHoodViewActive;
	},
})