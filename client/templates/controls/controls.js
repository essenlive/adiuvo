Template.controls.onRendered(function () {
  $('.ui.checkbox').checkbox();
  // $('#controls').form('set values',Meteor.users.findOne(Meteor.userId()).profile.controls);
})
Template.controls.events({
  "change input":function(){
    var values = $('#controls').form('get values');
    Meteor.users.update(Meteor.userId(), { $set: { "profile.controls": values } });
    modeToggle();
  }
})
