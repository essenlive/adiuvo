Template.autoMan.helpers({
  Message: function(){
    var defaultMessage = "Get ready to drive again.";
    if(userProfile.status.wMessageEx === "on") {  return userProfile.status;  }
    else { return defaultMessage }
  },

})
Template.autoMan.onRendered(function(){
  var defaultMessage = "Get ready to drive again.";
  var wMEMessage =  userProfile.wMEMessage;
  if(userProfile.status.wMessageEx === "on") {    voiceSynth(userProfile.wMEMessage,"en_EN");  }
  else {  voiceSynth(defaultMessage,"en_EN"); }
})
