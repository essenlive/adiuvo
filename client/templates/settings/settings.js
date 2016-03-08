Template.settings.onRendered(function () {
  //semantic ui toggle js
  $('.ui.checkbox').checkbox();
  $('.ui.dropdown').dropdown();
  //Manually change semantic ui toggle value
  updateStatus.settings();
  //preset toggles values
  var values = Meteor.user().profile.settings;
  $('#settings').form('set values', values);

});


Template.settings.events({
  //update the mongo profile on each change

  "change input":function(){
    var values = $('#settings').form('get values');
    Meteor.users.update(Meteor.userId(), { $set: { "profile.settings": values } });
    updateStatus.status();
  }
});
