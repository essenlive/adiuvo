Template.layout.onCreated(function (){
    Meteor.loginWithPassword('user', 'user', function(){
        //Concatenate the different settings into profile.status
        var status = oStatus.set(Meteor.user().profile.status, Meteor.user().profile.components, Meteor.user().profile.controller)
        Meteor.users.update(Meteor.userId(), { $set: { "profile.status": status } });

    });
});
