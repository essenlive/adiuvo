// toggles the driving.mode between autonomous, manual and autoMan
modeToggle = function(){
  var profile = Meteor.user().profile;
  var mode = profile.widgets.autonomous;
  var delay = profile.widgets.autoManDelay;
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
