Meteor.startup(function(){

        //Change root url for video if in dev or in prod env
        srcRoot = "";
        if (process.env.NODE_ENV == "development"){srcRoot = ""; }
        else { srcRoot = "https://s3.eu-central-1.amazonaws.com/adiuvobucket"; }
        console.log(srcRoot);

        // Create user
        if (Meteor.users.find().count() === 0) {

            var user = Accounts.createUser({
                profile: {
                    name: 'user',
                    components : {
                        cSpeedActive: false,
                        cStreetActive: false,
                        cStreetName: "main street",
                        cDistance: "500 m",
                        cAlertActive: false,
                        cAlertMessage: "Brake!",
                        cVoiceActive : true,
                        cVoiceMessage: "Brake!",
                        cVoiceControlActive: false,
                        cNavigationActive: false,
                        cNavigationDirection: "wN-left",
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
