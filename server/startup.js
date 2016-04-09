Meteor.startup(function(){



    if (Meteor.users.find().count() === 0) {

        var essen = Accounts.createUser({
            profile: {
                name: 'Roger',
                settings : {
                    sVoiceActive : true,
                },
                widgets : {
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
                },
                controller : {
                    fScenario : "1",
                    fCurrentTime : 0,
                    fStatus : 0,
                }
            },
            username: "user",
            password: "user",
        });

    };
});
