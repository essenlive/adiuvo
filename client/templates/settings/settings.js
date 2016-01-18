Template.settings.onRendered(function () {
  //semantic ui toggle js
  $('.ui.checkbox').checkbox();

  //Manually change semantic ui toggle value
  var settings = Meteor.users.findOne(Meteor.userId()).profile.settings;
  for (var key in settings) {
    if (settings[key] === 'on') {settings[key] = true;}
  }
  Meteor.users.update(Meteor.userId(), { $set: { "profile.settings": settings } });
  //preset toggles values
  $('#settings').form('set values',Meteor.users.findOne(Meteor.userId()).profile.settings);
});
Template.settings.events({
  //update the mongo profile on each change
  "change input":function(){
    var values = $('#settings').form('get values');
    Meteor.users.update(Meteor.userId(), { $set: { "profile.settings": values } });
    console.log(Meteor.users.findOne(Meteor.userId()).profile.settings);
  }
});
