Template.controls.onRendered(function () {
  $('.ui.checkbox').checkbox();
  var settings = Meteor.users.findOne(Meteor.userId()).profile.settings;
    var values = $('#settings').form('set values',settings);
  // var values = $('#settings').form('get values');
  // console.log(values);
})
Template.controls.events({
  "change input":function(){
    var values = $('#controls').form('get values');
    Meteor.users.update(Meteor.userId(), { $set: { "profile.controls": values } });
    // Session.set("settings",values);
    console.log(values);
  }
})
