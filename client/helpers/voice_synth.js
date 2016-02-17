voiceSynth = function(text, lang){
  var user = Meteor.users.findOne(Meteor.userId());
  var dVoice = user && user.profile.features;
  if('speechSynthesis' in window){
    if(dVoice && dVoice.voice){

      var speech = new SpeechSynthesisUtterance(text);
      // speech.lang = lang;
      speech.lang = 'en-US';
      window.speechSynthesis.speak(speech);
      console.log(text);
    }
  }
  return;
}
