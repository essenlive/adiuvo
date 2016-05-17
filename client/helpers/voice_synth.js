voiceSynth = function(text, lang){
  var dVoice = Meteor.user().profile.status && Meteor.user().profile.status.sVoiceActive;
  if('speechSynthesis' in window){
    if( dVoice ){
      var speech = new SpeechSynthesisUtterance(text);
      speech.lang = 'en-US';
      window.speechSynthesis.speak(speech);
      console.log( "voice :" + text);
    }
  }
  return text;
}
