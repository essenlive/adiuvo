modeToggle = function(){
  var mode = Meteor.users.findOne(Meteor.userId()).profile.controls.autonomous;
  if( mode === "on" ) {    Meteor.users.update(Meteor.userId(), { $set: { "profile.driving.mode": "autonomous" } });}
  if( !mode )  {
    Meteor.users.update(Meteor.userId(), { $set: { "profile.driving.mode": "autoMan" } });
    setTimeout(Meteor.users.update(Meteor.userId(), { $set: { "profile.driving.mode": "manual" } }),5000);
  }
  console.log(Meteor.users.findOne(Meteor.userId()).profile.driving.mode);

  return;
}
