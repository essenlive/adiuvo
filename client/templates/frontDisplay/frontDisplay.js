Template.frontDisplay.helpers({
  wNavigationActive: function(){
    var state = State.findOne({name: 'state'});
    return state && state.status.wNavigationActive;
  },
  wSpeedActive: function(){
    var state = State.findOne({name: 'state'});
    return state && state.status.wSpeedActive;
  },
  wAlertActive: function(){
    var state = State.findOne({name: 'state'});
    return state && state.status.wAlertActive;
  },
  wStreetActive: function(){
    var state = State.findOne({name: 'state'});
    return state && state.status.wStreetActive;
  },
})
