Template.timer.helpers({
  timer: function(){
    return Meteor.user().profile.status.wTimer;
  },
})

Template.timer.onRendered(function(){
  var timer = Math.floor( Meteor.user().profile.controls.wModeDelay/1000) ;
  this.wTimer = Meteor.setInterval(function(){
    timer -= 1;
    Meteor.users.update(Meteor.userId(), { $set: { "profile.status.wTimer": timer } });
    return;
  }, 1000);
})

Template.timer.onDestroyed(function(){

  clearInterval(this.autoManTimer);
  var timer = Meteor.user().profile.status.wModeDelay/1000;
  Meteor.users.update(Meteor.userId(), { $set: { "profile.status.wTimer": timer } });
})
