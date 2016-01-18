Template.hud.helpers({
  autonomousMode: function(){
    var sAuto = Meteor.users.findOne(Meteor.userId()).profile.controls;
    return sAuto && sAuto.autonomous === "on";
  },
  // mode: function(){
  //     var sMode = Meteor.users.findOne(Meteor.userId()).profile.driving;
  //     console.log(sMode && sMode.mode);
  //     return sMode && sMode.mode === "autonomous";
  // },
})
