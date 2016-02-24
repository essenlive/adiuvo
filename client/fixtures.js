// create admin
Meteor.startup(function(){
  if (Meteor.users.find().count() === 0) {

    var essen = Accounts.createUser({
      profile: {
        name: 'Roger'
      },
      username: "user",
      // email: "perchais.quentin@gmail.com",
      password: "user",
    }, function(){


      Meteor.loginWithPassword('user', 'user', function(){
        var settings = {
        };
        var widgets = {
          wVoiceActive : "on",
          wModeAutonomous: false,
          wModeDelay: "10000",
          wModeShow: false,
          wSpeedActive: false,
          wExplanationActive: false,
          wExplanationMessage: "Be ready to drive again!",
          wTimerActive: false,
          wYoutubeActive: false,
          wYoutubeOpacity: "o-min",
          wYoutubePosition: "p-left",
          wYoutubeSize: "s-min",
          wNavigationActive: false,
          wNavigationDirection: "wN-Left",
          wWindowActive: false,
        };
        var controller = {
          fScenario : "2",
          currentTime : 0,
          status : 0,
        };
        var status = {
          fScenario : "1",
          fCurrentTime : 0,
          fStatus : 0,

          wVoiceActive : "on",
          wMmode : "manual",
          wModeAutonomous: false,
          wModeDelay: "10000",
          wModeShow: false,
          wSpeedActive: false,
          wExplanationActive: false,
          wExplanationMessage: "Be ready to drive again!",
          wSpeed : 90,
          wTimer : widgets.wModeDelay / 1000,
          wTimerActive: false,
          wYoutubeActive: false,
          wYoutubeOpacity: "o-min",
          wYoutubePosition: "p-left",
          wYoutubeSize: "s-min",
          wNavigationActive: false,
          wNavigationDirection: "wN-Left",
          wWindowActive: false,
        };
        Meteor.users.update(Meteor.userId(), { $set: { "profile.settings": settings } });
        Meteor.users.update(Meteor.userId(), { $set: { "profile.widgets": widgets } });
        Meteor.users.update(Meteor.userId(), { $set: { "profile.status": status } });
        Meteor.users.update(Meteor.userId(), { $set: { "profile.controller": controller } });

        // Defining user
        var user = Meteor.users.findOne(Meteor.userId());
        userProfile = user && user.profile;
      });
    });
  }
});
Meteor.startup(function(){

});
