Template.hud.helpers({
  autonomousMode: function(){
    var sAuto = Meteor.users.findOne(Meteor.userId()).profile.controls;
    return sAuto && sAuto.autonomous === "on";
  },
})
