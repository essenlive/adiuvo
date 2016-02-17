// toggles the driving.mode between autonomous, manual and autoMan
modeToggle = function(){
  var profile = Meteor.users.findOne(Meteor.userId()).profile;
  var mode = profile.features.autonomous;
  var delay = profile.features.autoManDelay;
  if( mode === "on" ) {    Meteor.users.update(Meteor.userId(), { $set: { "profile.driving.mode": "autonomous" } });}
  if( !mode )  {
    Meteor.users.update(Meteor.userId(), { $set: { "profile.driving.mode": "autoMan" } });
    setTimeout(function(){
      Meteor.users.update(Meteor.userId(), { $set: { "profile.driving.mode": "manual" } })
    },
    delay);
  }
  return;
}
