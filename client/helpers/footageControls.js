// controls the footage
footageControls = {

	togglePlay :  function(){

		var state = State.findOne({name: 'state'}).status;
		state.fStatus = (state.fStatus + 1 ) % 2;
		Meteor.call('updateController',state);
		var status = oStatus.update( State.findOne({name: 'state'}).status, state);
		Meteor.call('updateStatus',status);

	},

  // goTo : function(timeIndex){

  // var state = State.findOne({name: 'state'}).status;
  // state.fCurrentTime = timeIndex;
  // Meteor.call('updateController',state);
  // var status = oStatus.update( State.findOne({name: 'state'}).status, state);
  // Meteor.call('updateStatus',status);

  // },
}
