Template.mode.helpers({
  drivingMode: function(){
      var user = Meteor.users.findOne(Meteor.userId());
      var sMode = user && user.profile.driving;
      return sMode && sMode.mode;
  },
})

Template.autonomous.onRendered(function(){
    voiceSynth("Autonomous mode activated","en_EN");
})
