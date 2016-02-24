voiceSynth = function(text, lang){
  var dVoice = userProfile.widgets && userProfile.widgets.voice;
  if('speechSynthesis' in window){
    if( dVoice ){
      var speech = new SpeechSynthesisUtterance(text);
      speech.lang = 'en-US';
      window.speechSynthesis.speak(speech);
      console.log( "voice :" + text);
    }
  }
  return;
}
