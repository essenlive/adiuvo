Template.frontFootage.onRendered(function () {
  if( $("#front-footage-vid")[0] ){
    console.log('ffplayer');
    frontFootagePlayer = $("#front-footage-vid")[0];
    var refreshInt = 100;
    $('#progress-bar-position').css( {'transition-duration' : refreshInt});
    Meteor.setInterval(function(){
      currentTime = frontFootagePlayer.currentTime;
      var totalTime =  frontFootagePlayer.duration;
      var progressPosition = currentTime / totalTime * 100;
      $('#progress-bar-position').width( progressPosition + '%');
      return;
    }, refreshInt);
  }
  console.log('ffrerendered');
});

Template.rearFootage.onRendered(function () {
});
Template.leftFootage.onRendered(function () {
});
Template.rightFootage.onRendered(function () {
});


Template.frontFootage.helpers({
  footageStatus: function(){
    if (Meteor.user().profile.status.fStatus === 1) return '<i class="pause icon"></i>'
    else { return '<i class="play icon"></i>' }
  },
  route: function(){
    return Router.current().route.getName();
  },
  footageScenario: function(){
    var scenario = Meteor.user().profile.status.fScenario;
    var scenarioSource = '<video id="front-footage-vid" autoplay loop preload="auto"> <source src="/video/' + scenario + '/driving_footage_front.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser. </video>'
    return scenarioSource;

  },
})

Template.rearFootage.helpers({
  footageScenario: function(){
    var scenario = Meteor.user().profile.status.fScenario;
    var scenarioSource = '<video id="rear-footage-vid" autoplay loop preload="auto"> <source src="/video/' + scenario + '/driving_footage_rear.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser. </video>'
    return scenarioSource;
  },
})

Template.leftFootage.helpers({
  footageScenario: function(){
    var scenario = Meteor.user().profile.status.fScenario;
    var scenarioSource = '<video id="left-footage-vid" autoplay loop preload="auto"> <source src="/video/' + scenario + '/driving_footage_left.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser. </video>'
    return scenarioSource;
  },
})

Template.rightFootage.helpers({
  footageScenario: function(){
    var scenario = Meteor.user().profile.status.fScenario;
    var scenarioSource = '<video id="right-footage-vid" autoplay loop preload="auto"> <source src="/video/' + scenario + '/driving_footage_right.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser. </video>'
    return scenarioSource;
  },
})
