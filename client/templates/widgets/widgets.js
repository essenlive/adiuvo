Template.widgets.onRendered(function () {
  //semantic ui toggle js
  $('.ui.checkbox').checkbox();
  $('.ui.dropdown').dropdown();
  //Manually change semantic ui toggle value
  updateStatus.widgets();
  //preset toggles values
  var values = Meteor.user().profile.widgets;
  $('#widgets').form('set values', values);
});

Template.widgets.helpers({
  shortcuts: function(){
    var shortcuts = myShortcuts;

    return shortcuts;
  },
})

Template.widgets.events({
  //update the mongo profile on each change

  "change input":function(){
    var values = $('#widgets').form('get values');
    Meteor.users.update(Meteor.userId(), { $set: { "profile.widgets": values } });
    updateStatus.status();
  },
  "click .send-message":function(){
    var message = Meteor.user().profile.status.wVoiceMessage;
    voiceSynth( message );
    console.log( message );
  },

});
