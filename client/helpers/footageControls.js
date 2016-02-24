// controls the footage
// footageControls = {

//   status : userProfile.controller.status,
//   currentTime : userProfile.controller.currentTime,
//   scenario : userProfile.controller.scenario,

//   togglePlay :  function(){
//     status = (status + 1 ) % 2;
//     console.log("status" + status);
//     Meteor.users.update(Meteor.userId(), { $set: { "profile.controller.status": status } });
//   },

//   goTo : function(timeIndex){
//     console.log("goTo" + timeIndex);
//     Meteor.users.update(Meteor.userId(), { $set: { "profile.controller.currentTime": timeIndex } });
//     frontFootagePlayer.currentTime(timeIndex);
//     rearFootagePlayer.currentTime(timeIndex);
//     leftFootagePlayer.currentTime(timeIndex);
//     rightFootagePlayer.currentTime(timeIndex);
//   },

//   loadScenario : function(scenIndex){
//     console.log("scenario" + scenIndex);
//     Meteor.users.update(Meteor.userId(), { $set: { "profile.controller.scenario": scenIndex } });
//   }
// }
