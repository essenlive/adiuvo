Template.autoMan.helpers({
  Message: function(){
    var defaultMessage = "Get ready to drive again.";
    if(Meteor.user().profile.status.wExplanationActive) {  return Meteor.user().profile.status.wExplanationMessage;  }
    else { return defaultMessage }
  },

})
Template.autoMan.onRendered(function(){
  var defaultMessage = "Get ready to drive again.";
  var wMEMessage =  Meteor.user().profile.status.wExplanationMessage;
  if(Meteor.user().profile.status.wExplanationActive) {    voiceSynth(Meteor.user().profile.status.wExplanationMessage,"en_EN");  }
  else {  voiceSynth(defaultMessage,"en_EN"); }
})
