Template.mode.helpers({
  wMEMessage: function(){
    var user = Meteor.users.findOne(Meteor.userId());
    var helper = user && user.profile.controls;
    return helper && helper.wMEMessage;
  },
})
