Template.frontFootage.onRendered(function () {
	videojs("front-footage-vid").ready(function(){
		frontFootagePlayer = this;

		Tracker.autorun(function() {
			var state = State.findOne({name: 'state'}).status;
			var status = state && state.fStatus;

			if ( status ) { 
				frontFootagePlayer.pause();
				$("#front-footage").css({border: "1rem solid red"});
				console.log("play");
			}
			else { 
				frontFootagePlayer.play();
				$("#front-footage").css({border: "1rem solid green"});
				console.log("play");
			}

		});

    // Tracker.autorun(function fControlGoto() {
    //   var goTo = Meteor.user().profile.status.fCurrentTime;
    //   frontFootagePlayer.currentTime(goTo);
    // });

});
});

Template.rearFootage.onRendered(function () {
	videojs("rear-footage-vid").ready(function(){
		rearFootagePlayer = this;

    // Tracker.autorun(function fControlToggle() {
    //   var status = Meteor.user().profile.status.fStatus;
    //   if ( status ) { rearFootagePlayer.pause(); }
    //   else { rearFootagePlayer.play(); }
    // });

    // Tracker.autorun(function fControlGoto() {
    //   var goTo = Meteor.user().profile.status.fCurrentTime;
    //   rearFootagePlayer.currentTime(goTo);
    // });

});
});
Template.leftFootage.onRendered(function () {
	videojs("left-footage-vid").ready(function(){
		leftFootagePlayer = this;

    // Tracker.autorun(function fControlToggle() {
    //   var status = Meteor.user().profile.status.fStatus;
    //   if ( status ) { leftFootagePlayer.pause(); }
    //   else { leftFootagePlayer.play(); }
    // });

    // Tracker.autorun(function fControlGoto() {
    //   var goTo = Meteor.user().profile.status.fCurrentTime;
    //   leftFootagePlayer.currentTime(goTo);
    // });

});
});
Template.rightFootage.onRendered(function () {
	videojs("right-footage-vid").ready(function(){
		rightFootagePlayer = this;

    // Tracker.autorun(function fControlToggle() {
    //   var status = Meteor.user().profile.status.fStatus;
    //   if ( status ) { rightFootagePlayer.pause(); }
    //   else { rightFootagePlayer.play(); }
    // });

    // Tracker.autorun(function fControlGoto() {
    //   var goTo = Meteor.user().profile.status.fCurrentTime;
    //   rightFootagePlayer.currentTime(goTo);
    // });

});
});

Template.frontFootage.helpers({
	route: function(){
		return Router.current().route.getName();
	},
	footageScenario: function(){

		var state = State.findOne({name: 'state'});
		var scenario = state && state.status.fScenario;
		var scenarioSource = '<video id="front-footage-vid" autoplay loop class="video-js" preload="auto" poster="https://s3.eu-central-1.amazonaws.com/adiuvobucket/video/driving_footage.png"> <source src="https://s3.eu-central-1.amazonaws.com/adiuvobucket/video/Valeo_Footage_Front_View_0'+ scenario +'.webm" type="video/webm" /><source src="https://s3.eu-central-1.amazonaws.com/adiuvobucket/video/Valeo_Footage_Front_View_0'+ scenario +'.mp4" type="video/mp4" />Your browser does not support the video tag.</video>'
		return scenarioSource;

	},
})

Template.rearFootage.helpers({
	footageScenario: function(){
		var state = State.findOne({name: 'state'});
		var scenario = state && state.status.fScenario;
		var scenarioSource = '<video id="rear-footage-vid" autoplay loop class="video-js" preload="auto" poster="https://s3.eu-central-1.amazonaws.com/adiuvobucket/video/driving_footage.png"> <source src="https://s3.eu-central-1.amazonaws.com/adiuvobucket/video/Valeo_Footage_Rear_View_0'+ scenario +'.webm" type="video/webm" /><source src="https://s3.eu-central-1.amazonaws.com/adiuvobucket/video/Valeo_Footage_Rear_View_0'+ scenario +'.mp4" type="video/mp4" />Your browser does not support the video tag.</video>'
		return scenarioSource;
	},
})

Template.leftFootage.helpers({
	footageScenario: function(){
		var state = State.findOne({name: 'state'});
		var scenario = state && state.status.fScenario;
		var scenarioSource = '<video id="left-footage-vid" autoplay loop class="video-js" preload="auto" poster="https://s3.eu-central-1.amazonaws.com/adiuvobucket/video/driving_footage.png"> <source src="https://s3.eu-central-1.amazonaws.com/adiuvobucket/video/Valeo_Footage_Left_View_0'+ scenario +'.webm" type="video/webm" /><source src="https://s3.eu-central-1.amazonaws.com/adiuvobucket/video/Valeo_Footage_Left_View_0'+ scenario +'.mp4" type="video/mp4" />Your browser does not support the video tag.</video>'
		return scenarioSource;
	},
})

Template.rightFootage.helpers({
	footageScenario: function(){
		var state = State.findOne({name: 'state'});
		var scenario = state && state.status.fScenario;
		var scenarioSource = '<video id="right-footage-vid" autoplay loop class="video-js" preload="auto" poster="https://s3.eu-central-1.amazonaws.com/adiuvobucket/video/driving_footage.png"> <source src="https://s3.eu-central-1.amazonaws.com/adiuvobucket/video/Valeo_Footage_Right_View_0'+ scenario +'.webm" type="video/webm" /><source src="https://s3.eu-central-1.amazonaws.com/adiuvobucket/video/Valeo_Footage_Right_View_0'+ scenario +'.mp4" type="video/mp4" />Your browser does not support the video tag.</video>'
		return scenarioSource;
	},
})
