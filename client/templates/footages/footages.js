Template.frontFootage.onRendered(function () {
  videojs("front-footage-vid").ready(function(){
    frontFootagePlayer = this;

    Tracker.autorun(function fControlToggle() {
      var status = Meteor.user().profile.status.fStatus;
      if ( status ) { frontFootagePlayer.pause(); }
      else { frontFootagePlayer.play(); }
    });

    Tracker.autorun(function fControlGoto() {
      var goTo = Meteor.user().profile.status.fCurrentTime;
      frontFootagePlayer.currentTime(goTo);
    });

  });
});

Template.rearFootage.onRendered(function () {
  videojs("rear-footage-vid").ready(function(){
    rearFootagePlayer = this;

    Tracker.autorun(function fControlToggle() {
      var status = Meteor.user().profile.status.fStatus;
      if ( status ) { rearFootagePlayer.pause(); }
      else { rearFootagePlayer.play(); }
    });

    Tracker.autorun(function fControlGoto() {
      var goTo = Meteor.user().profile.status.fCurrentTime;
      rearFootagePlayer.currentTime(goTo);
    });

  });
});
Template.leftFootage.onRendered(function () {
  videojs("left-footage-vid").ready(function(){
    leftFootagePlayer = this;

    Tracker.autorun(function fControlToggle() {
      var status = Meteor.user().profile.status.fStatus;
      if ( status ) { leftFootagePlayer.pause(); }
      else { leftFootagePlayer.play(); }
    });

    Tracker.autorun(function fControlGoto() {
      var goTo = Meteor.user().profile.status.fCurrentTime;
      leftFootagePlayer.currentTime(goTo);
    });

  });
});
Template.rightFootage.onRendered(function () {
  videojs("right-footage-vid").ready(function(){
    rightFootagePlayer = this;

    Tracker.autorun(function fControlToggle() {
      var status = Meteor.user().profile.status.fStatus;
      if ( status ) { rightFootagePlayer.pause(); }
      else { rightFootagePlayer.play(); }
    });

    Tracker.autorun(function fControlGoto() {
      var goTo = Meteor.user().profile.status.fCurrentTime;
      rightFootagePlayer.currentTime(goTo);
    });

  });
});


Template.frontFootage.helpers({
  route: function(){
    return Router.current().route.getName();
  },
  footageScenario: function(){
    var scenario = Meteor.user().profile.status.fScenario;
    var scenarioSource = '<video id="front-footage-vid" autoplay loop class="video-js" preload="auto"> <source src="/video/' + scenario + '/driving_footage_front.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser. </video>'
    return scenarioSource;

  },
})

Template.rearFootage.helpers({
  footageScenario: function(){
    var scenario = Meteor.user().profile.status.fScenario;
    var scenarioSource = '<video id="rear-footage-vid" autoplay loop class="video-js" preload="auto"> <source src="/video/' + scenario + '/driving_footage_rear.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser. </video>'
    return scenarioSource;
  },
})

Template.leftFootage.helpers({
  footageScenario: function(){
    var scenario = Meteor.user().profile.status.fScenario;
    var scenarioSource = '<video id="left-footage-vid" autoplay loop class="video-js" preload="auto"> <source src="/video/' + scenario + '/driving_footage_left.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser. </video>'
    return scenarioSource;
  },
})

Template.rightFootage.helpers({
  footageScenario: function(){
    var scenario = Meteor.user().profile.status.fScenario;
    var scenarioSource = '<video id="right-footage-vid" autoplay loop class="video-js" preload="auto"> <source src="/video/' + scenario + '/driving_footage_right.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser. </video>'
    return scenarioSource;
  },
})
