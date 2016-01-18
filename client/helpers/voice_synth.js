voiceSynth = function(text, lang){
  var user = Meteor.users.findOne(Meteor.userId());
  var dVoice = user && user.profile.settings;
  if('speechSynthesis' in window){
    if(dVoice && dVoice.voice){

      var speech = new SpeechSynthesisUtterance(text);
      speech.lang = lang;
      window.speechSynthesis.speak(speech);
      console.log(text);
    }
  }
  return;
}
