Template.intro.helpers({
	name: function(){
		var state = State.findOne({name: 'state'})
		var name = "";
		if ( state && state.status.scenario ) {
			_.map(State.findOne({name: 'state'}).scenarios, function(element , value, index){
				if (element.index === state.status.scenario) name = element.name;
			});
		}
		return name;
	},
	start: function(){
		var state = State.findOne({name: 'state'})
		console.log(state && state.status.currentTime > 5 );
		return !(state && state.status.currentTime > 5);
	},
});
