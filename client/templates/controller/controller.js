Template.controller.onRendered(function () {
    //semantic ui toggle js
    $('.ui.checkbox').checkbox();
    $('.ui.dropdown').dropdown();
  //Manually change semantic ui toggle value
  // updateStatus.controller();
  //preset toggles values
  $('#controller').form('set values', userProfile.controller);
});

Template.controller.events({
  //update the mongo profile on each change

  "change input":function(){
    var values = $('#controller').form('get values');
    console.log(values);
    Meteor.users.update(Meteor.userId(), { $set: { "profile.controller": values } });
    // updateStatus.status();
    console.log(userProfile.controller);
    // console.log(userProfile.status);
  }
});
