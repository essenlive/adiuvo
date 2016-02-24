Template.widgets.onRendered(function () {
  //semantic ui toggle js
  $('.ui.checkbox').checkbox();
  $('.ui.dropdown').dropdown();
  //Manually change semantic ui toggle value
  // updateStatus.widgets();
  //preset toggles values
  $('#widgets').form('set values', userProfile.widgets);
});



Template.widgets.events({
  //update the mongo profile on each change

  "change input":function(){
    var values = $('#widgets').form('get values');
    Meteor.users.update(Meteor.userId(), { $set: { "profile.widgets": values } });
    // updateStatus.status();
  }
});
