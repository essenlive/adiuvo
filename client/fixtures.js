Meteor.startup(function(){


    var collect = function(){
        var ret = {};
        var len = arguments.length;
        for (var i=0; i<len; i++) {
            for (p in arguments[i]) {
                if (arguments[i].hasOwnProperty(p)) {
                    ret[p] = arguments[i][p];
                }
            }
        }
        return ret;
    };

    Meteor.loginWithPassword('user', 'user', function(){
        var widgets = Meteor.user().profile.widgets;
        var settings = Meteor.user().profile.settings;
        var controller = Meteor.user().profile.controller;
        var status = collect(widgets, settings, controller);

        if (process.env.NODE_ENV == "development"){
            status.srcRoot = "";
        }
        else {
            status.srcRoot = "https://s3.eu-central-1.amazonaws.com/adiuvobucket";
        }
        Meteor.users.update(Meteor.userId(), { $set: { "profile.status": status } });
    });
});
