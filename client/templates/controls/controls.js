Template.controls.onRendered(function () {
  //semantic ui toggle js
  $('.ui.checkbox').checkbox();
  //semantic ui define form rules

  //Manually change semantic ui toggle value
  var controls = Meteor.users.findOne(Meteor.userId()).profile.controls;
  for (var key in controls) {
    if (controls[key] === 'on') {controls[key] = true;}
  }
  Meteor.users.update(Meteor.userId(), { $set: { "profile.controls": controls } });

  //preset toggles values
  $('#controls').form('set values',Meteor.users.findOne(Meteor.userId()).profile.controls);
});
Template.controls.events({
  //update the mongo profile on each change

  "change input":function(){
    var values = $('#controls').form('get values');
    Meteor.users.update(Meteor.userId(), { $set: { "profile.controls": values } });
    console.log(Meteor.users.findOne(Meteor.userId()).profile.controls);
    modeToggle();
  }
});
