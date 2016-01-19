Template.controls.onRendered(function () {
  //semantic ui toggle js
  $('.ui.checkbox').checkbox();
  //semantic ui define form rules

  //Manually change semantic ui toggle value
  var controls = Meteor.users.findOne(Meteor.userId()).profile.controls;
  for (var key in controls) {
    if (controls[key] === 'on') {controls[key] = true;}
  }
  //preset toggles values
  $('#controls').form('set values', controls);
});
Template.controls.events({
  //update the mongo profile on each change

  "change input":function(){
    var values = $('#controls').form('get values');
    var newMode = $('#controls').form('get value','autonomous');
    var oldMode = Meteor.users.findOne(Meteor.userId()).profile.controls.autonomous;
    Meteor.users.update(Meteor.userId(), { $set: { "profile.controls": values } });
    if (newMode !== oldMode) {modeToggle(); }
    console.log(Meteor.users.findOne(Meteor.userId()).profile.controls);
  }
});
