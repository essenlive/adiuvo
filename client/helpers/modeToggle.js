// toggles the driving.mode between autonomous, manual and autoMan
modeToggle = function(){
  var profile = Meteor.users.findOne(Meteor.userId()).profile;
  var mode = profile.controls.autonomous;
  var delay = profile.controls.autoManDelay;
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
