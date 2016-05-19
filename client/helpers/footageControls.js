// controls the footage
footageControls = {

	togglePlay :  function(){

		var state = State.findOne({name: 'state'}).status;
		state.fStatus = (state.fStatus + 1 ) % 2;
		Meteor.call('updateState', {"status.fStatus": state.fStatus } );

	},

// goTo : function(timeIndex){

  	// var state = State.findOne({name: 'state'}).status;
  	// state.fCurrentTime = timeIndex;
	// Meteor.call('updateState', "status", state);

  // },
}
