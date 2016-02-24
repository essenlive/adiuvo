Template.mode.helpers({
  wMode: function(){
    return userProfile.status.mode;
  },
  wYoutube: function(){
    return  userProfile.status.wYoutube;
  },
  wMessageEx: function(){
    return  userProfile.status.wMessageEx;
  },
  wNavigation: function(){
    return  userProfile.status.wNavigation;
  },
  wCSpeed: function(){
    return  userProfile.status.wCSpeed;
  },
  wRoadWindow: function(){
    return  userProfile.status.wRoadWindow;
  },
  wAAvailable: function(){
    return  userProfile.status.wAAvailable;
  },
})


Template.autoMan.helpers({
  wTimer: function(){
    return  userProfile.status.wTimer;
  },
})
