Template.controller.onRendered(function () {
  //semantic ui toggle js
  $('.ui.checkbox').checkbox();
  $('.ui.dropdown').dropdown();
  //Manually change semantic ui toggle value
  updateStatus.controller();
  //preset toggles values
  var values = Meteor.user().profile.controller;
  $('#controller').form('set values', values );
});

Template.controller.events({
  //update the mongo profile on each change

  "change input":function(){
    var values = $('#controller').form('get values');
    Meteor.users.update(Meteor.userId(), { $set: { "profile.controller": values } });
    updateStatus.status();
  }
});
