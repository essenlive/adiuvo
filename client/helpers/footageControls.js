// controls the footage
footageControls = {

  togglePlay :  function(){
    var status = (Meteor.user().profile.status.fStatus + 1 ) % 2;
    Meteor.users.update(Meteor.userId(), { $set: { "profile.controller.fStatus": status } });
    updateStatus.status();
    if ( status ) {
      frontFootagePlayer.pause();
    }
    else {
      frontFootagePlayer.play();
    }
    console.log("status = " + status);
  },

  goTo : function(timeIndex){
    console.log("goTo = " + timeIndex);
    Meteor.users.update(Meteor.userId(), { $set: { "profile.controller.fCurrentTime": timeIndex } });
    updateStatus.status();
    frontFootagePlayer.currentTime = timeIndex;
  },

  loadScenario : function(scenIndex){
    Meteor.users.update(Meteor.userId(), { $set: { "profile.controller.fScenario": scenIndex } });
    updateStatus.status();
    console.log("scenario = " + scenIndex);

  },
}
