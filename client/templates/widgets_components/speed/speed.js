Template.speed.helpers({
  speed: function(){
    return Meteor.user().profile.status.wSpeed;
  },
})

Template.speed.onRendered(function(){
  var speed = Meteor.user().profile.status.wSpeed;
  Meteor.setInterval(function(){
    speed +=  Math.floor(Math.random() * 5) - 2;
    Meteor.users.update(Meteor.userId(), { $set: { "profile.status.wSpeed": speed } });
    return;
  }, 330);
})
