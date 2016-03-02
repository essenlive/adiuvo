Template.frontFootage.onRendered(function () {
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
});

Template.rearFootage.onRendered(function () {
  // videojs("rear-footage-vid").ready(function(){
  //   rearFootagePlayer = this;
  // });
});
Template.leftFootage.onRendered(function () {
  // videojs("left-footage-vid").ready(function(){
  //   leftFootagePlayer = this;
  // });
});
Template.rightFootage.onRendered(function () {
  // videojs("right-footage-vid").ready(function(){
  //   rightFootagePlayer = this;
  // });
});


Template.frontFootage.helpers({
  footageStatus: function(){
    if (Meteor.user().profile.status.fStatus === 1) return '<i class="pause icon"></i>'
    else { return '<i class="play icon"></i>' }
  },
  footageScenario: function(){
    return Meteor.user().profile.status.fScenario;
  },
  route: function(){
    return Router.current().route.getName();
  },
})

Template.rearFootage.helpers({
  footageScenario: function(){
    return Meteor.user().profile.status.fScenario;
  },
})

Template.leftFootage.helpers({
  footageScenario: function(){
    return Meteor.user().profile.status.fScenario;
  },
})

Template.rightFootage.helpers({
  footageScenario: function(){
    return Meteor.user().profile.status.fScenario;
  },
})
