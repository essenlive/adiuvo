Template.layout.helpers({
  route: function(){
    return Router.current().route.getName();
  },
})

Template.layout.onRendered(function(){

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

