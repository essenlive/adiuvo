Template.timer.helpers({
  timer: function(){
    var user = Meteor.users.findOne(Meteor.userId());
    var wSHelper = user && user.profile.driving;
    return wSHelper && wSHelper.timer;
  },
})

Template.timer.onRendered(function(){
  var timer = Math.floor( Meteor.users.findOne(Meteor.userId()).profile.controls.autoManDelay/1000) ;
  this.autoManTimer = Meteor.setInterval(function(){
    timer -= 1;
    Meteor.users.update(Meteor.userId(), { $set: { "profile.driving.timer": timer } });
    return;
  }, 1000);
})

Template.timer.onDestroyed(function(){

  clearInterval(this.autoManTimer);
  var timer = Meteor.users.findOne(Meteor.userId()).profile.controls.autoManDelay/1000;
  Meteor.users.update(Meteor.userId(), { $set: { "profile.driving.timer": timer } });
})
