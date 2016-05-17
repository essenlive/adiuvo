// // controls the footage
// footageControls = {

//   togglePlay :  function(){
//     var status = (Meteor.user().profile.status.fStatus + 1 ) % 2;
//     Meteor.users.update(Meteor.userId(), { $set: { "profile.controller.fStatus": status } });
//     updateStatus.status();
//     console.log("status = " + status);
//   },

//   goTo : function(timeIndex){
//     Meteor.users.update(Meteor.userId(), { $set: { "profile.controller.fCurrentTime": timeIndex } });
//     updateStatus.status();
//     console.log("goTo = " + timeIndex);
//     // frontFootagePlayer.currentTime = timeIndex;
//   },
// }
