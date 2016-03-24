// create admin
Meteor.startup(function(){
  if (Meteor.users.find().count() === 0) {

    var essen = Accounts.createUser({
      profile: {
        name: 'Roger'
      },
      username: "user",
      password: "user",
    }, function(){


      Meteor.loginWithPassword('user', 'user', function(){
        var settings = {
          sVoiceActive : true,
        };
        var widgets = {
          wEmirrorsActive: true,
          wEmirrorsDisplay: "wE-all",
          wHoodViewActive: false,
          wTopViewActive: false,
          wSpeedActive: false,
          wStreetName: "main street",
          wDistance: "500 m",
          wAlertActive: true,
          wAlertMessage: "Brake!",
          wVoiceMessage: "Brake!",
          wNavigationActive: false,
          wNavigationDirection: "wN-left",
          wVoiceControlActive: false,
        };
        var controller = {
          fScenario : "2",
          fCurrentTime : 0,
          fStatus : 0,
        };
        var status = {
          fScenario : "2",
          fCurrentTime : 0,
          fStatus : 0,

          sVoiceActive : true,

          wEmirrorsActive: true,
          wEmirrorsDisplay: "wE-all",
          wHoodViewActive: false,
          wTopViewActive: false,
          wSpeedActive: false,
          wSpeed: 90,
          wStreetName: "main street",
          wDistance: "in 500m",
          wAlertActive: true,
          wAlertMessage: "Brake!",
          wVoiceMessage: "Brake!",
          wNavigationActive: true,
          wNavigationDirection: "wN-left",
          wVoiceControlActive: false,
        };
        Meteor.users.update(Meteor.userId(), { $set: { "profile.settings": settings } });
        Meteor.users.update(Meteor.userId(), { $set: { "profile.widgets": widgets } });
        Meteor.users.update(Meteor.userId(), { $set: { "profile.status": status } });
        Meteor.users.update(Meteor.userId(), { $set: { "profile.controller": controller } });

      });
    });
  }
});
Meteor.startup(function(){

});
