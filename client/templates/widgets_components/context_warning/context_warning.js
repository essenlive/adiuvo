Template.contextWarning.helpers({
  alertMessage: function(){
    return Meteor.user().profile.status.wAlertMessage;
  },
})
