Template.layout.onRendered(function () {

});
voiceSynth = function(text, lang){
  if('speechSynthesis' in window){
    var speech = new SpeechSynthesisUtterance(text);
    speech.lang = lang;
    window.speechSynthesis.speak(speech);
  }
}
