Template.speed.helpers({
  speed: function(){
    var user = Meteor.users.findOne(Meteor.userId());
    var wSHelper = user && user.profile.driving;
    return wSHelper && wSHelper.speed;
  },
})

Template.speed.onRendered(function(){
  var speed = Meteor.users.findOne(Meteor.userId()).profile.driving.speed;
  Meteor.setInterval(function(){
    speed +=  Math.floor(Math.random() * 5) - 2;
    Meteor.users.update(Meteor.userId(), { $set: { "profile.driving.speed": speed } });
    return;
  }, 330);
})
