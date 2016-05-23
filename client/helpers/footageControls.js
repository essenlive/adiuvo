// controls the footage
footageControls = {

	togglePlay :  function(){

		var state = State.findOne({name: 'state'}).status;
		fStatus = (state.fStatus + 1 ) % 2;
		Meteor.call('updateState', {"status.fStatus": fStatus } );

	},

	goTo : function(timeIndex){

		var state = State.findOne({name: 'state'}).status;
		fCurrentTime = timeIndex;
		Meteor.call('updateState', {"status.fcurrentTime": fCurrentTime } );

	},
}
