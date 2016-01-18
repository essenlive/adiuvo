
Template.layout.events({
});
Template.layout.onRendered(function(){
  Meteor.loginWithPassword('user', 'user', function(){
    var settings = {
      voice : "on",
    };
    var controls = {
      autonomous : false,
      autoManDelay : 5000,
    };
    Meteor.users.update(Meteor.userId(), { $set: { "profile.settings": settings } });
    Meteor.users.update(Meteor.userId(), { $set: { "profile.controls": controls } });
  });
});
