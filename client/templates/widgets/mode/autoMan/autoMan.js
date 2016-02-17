Template.autoMan.helpers({
  Message: function(){
    var defaultMessage = "Get ready to drive again.";
    var user = Meteor.users.findOne(Meteor.userId());
    var helper = user && user.profile.controls;
    if(Meteor.users.findOne(Meteor.userId()).profile.controls.wMessageEx === "on") {  return helper && helper.wMEMessage;  }
    else { return defaultMessage }
  },

})
Template.autoMan.onRendered(function(){
  var defaultMessage = "Get ready to drive again.";
  var user = Meteor.users.findOne(Meteor.userId());
  var helper = user && user.profile.controls;
  var wMEMessage =  helper && helper.wMEMessage;
  if(Meteor.users.findOne(Meteor.userId()).profile.controls.wMessageEx === "on") {    voiceSynth(wMEMessage,"en_EN");  }
  else {  voiceSynth(defaultMessage,"en_EN"); }
})
