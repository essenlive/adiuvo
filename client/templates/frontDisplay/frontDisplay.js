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

Template.frontDisplay.onRendered(function(){

  // Meteor.setTimeout(function(){
  //  Meteor.call('loadScenario',4);
  // }, 500);

  Tracker.autorun(function () {
    var yp = Session.get('y') / $(window).height() * 100;
    var xp = Session.get('x') / $(window).width() * 100;
    if ( yp<0 ) {yp = 0};
    if ( xp<0 ) {xp = 0};
    if ( yp>100 ) {yp = 100};
    if ( xp>100 ) {xp = 100};
    $("#pos").css({ left: xp + "%", top: yp + "%" });
  });
});

