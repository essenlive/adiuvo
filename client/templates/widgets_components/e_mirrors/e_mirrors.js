Template.eMirrors.helpers({
    wEmirrorsDisplay: function(){
        return Meteor.user().profile && Meteor.user().profile.status.wEmirrorsDisplay;
    },
    wEmirrorsActive: function(){
        var active = "inactive"
        if(Meteor.user().profile && Meteor.user().profile.status.wEmirrorsActive){ active = "active" }
        return active;
    },
})
