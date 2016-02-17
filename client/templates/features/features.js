Template.features.onRendered(function () {
  //semantic ui toggle js
  $('.ui.checkbox').checkbox();
  //semantic ui define form rules

  //Manually change semantic ui toggle value
  var controls = Meteor.users.findOne(Meteor.userId()).profile.features;
  for (var key in controls) {
    if (controls[key] === 'on') {controls[key] = true;}
  }
  //preset toggles values
  $('#features').form('set values', controls);
});
Template.features.events({
  //update the mongo profile on each change

  "change input":function(){
    var values = $('#features').form('get values');
    var newMode = $('#features').form('get value','autonomous');
    var oldMode = Meteor.users.findOne(Meteor.userId()).profile.features.autonomous;
    Meteor.users.update(Meteor.userId(), { $set: { "profile.features": values } });
    if (newMode !== oldMode) {modeToggle(); }
    console.log(Meteor.users.findOne(Meteor.userId()).profile.features);
  }
});
