Template.frontFootage.onRendered(function () {
  videojs("front-footage-vid").ready(function(){
    frontFootagePlayer = this;
    var refreshInt = 100;
    $('#progress-bar-position').css( {'transition-duration' : refreshInt});
      Meteor.setInterval(function(){
        currentTime = frontFootagePlayer.currentTime();
        var totalTime =  frontFootagePlayer.duration();
        var progressPosition = currentTime / totalTime * 100;
        $('#progress-bar-position').width( progressPosition + '%');
        return;
      }, refreshInt);

  });
});

Template.rearFootage.onRendered(function () {
  videojs("rear-footage-vid").ready(function(){
    rearFootagePlayer = this;
  });
});
Template.leftFootage.onRendered(function () {
  videojs("left-footage-vid").ready(function(){
    leftFootagePlayer = this;
  });
});
Template.rightFootage.onRendered(function () {
  videojs("right-footage-vid").ready(function(){
    rightFootagePlayer = this;
  });
});


Template.frontFootage.helpers({
  footageStatus: function(){
    if (userProfile.status.fStatus === 1) return '<i class="pause icon"></i>'
    else { return '<i class="play icon"></i>' }
  },
  footageScenario: function(){
    return userProfile.status.fScenario;
  },
  route: function(){
    return Router.current().route.getName();
  },
})

Template.rearFootage.helpers({
  footageScenario: function(){
    return userProfile.status.fScenario;
  },
})

Template.leftFootage.helpers({
  footageScenario: function(){
    return userProfile.status.fScenario;
  },
})

Template.rightFootage.helpers({
  footageScenario: function(){
    return userProfile.status.fScenario;
  },
})