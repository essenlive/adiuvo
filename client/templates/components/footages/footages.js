Template.frontFootage.onRendered(function () {

	Tracker.autorun(function() {
		var status = State.findOne({name: 'state'}).status.fstatus;
		if (status) {

			if ( status === 1 ) { 
				$("#front-footage-vid")[0].pause();
				$("#front-footage").css({border: "1rem solid red"});
				console.log("pause");
			}
			else { 
				$("#front-footage-vid")[0].play();
				$("#front-footage").css({border: "none"});
				console.log("play");
			}
		}

	});

	// Tracker.autorun(function() {
	// 	var state = State.findOne({name: 'state'});
	// 	if (state) {
	// 		var goTo = state && state.status.fCurrentTime;
	// 		$("#front-footage-vid")[0].currentTime = goTo;
	// 	}
	// });

});

Template.rearFootage.onRendered(function () {

	Tracker.autorun(function() {
		var state = State.findOne({name: 'state'});
		if (state) {

			var status = state && state.status.fStatus;

			if ( status === 1 ) { 
				$("#rear-footage-vid")[0].pause();
				$("#rear-footage").css({border: "1rem solid red"});
				console.log("pause");
			}
			else { 
				$("#rear-footage-vid")[0].play();
				$("#rear-footage").css({border: "none"});
				console.log("play");
			}
		}

	});

});
Template.leftFootage.onRendered(function () {

	Tracker.autorun(function() {
		var state = State.findOne({name: 'state'});
		if (state) {

			var status = state && state.status.fStatus;

			if ( status === 1 ) { 
				$("#left-footage-vid")[0].pause();
				$("#left-footage").css({border: "1rem solid red"});
				console.log("pause");
			}
			else { 
				$("#left-footage-vid")[0].play();
				$("#left-footage").css({border: "none"});
				console.log("play");
			}
		}

	});
});
Template.rightFootage.onRendered(function () {

	Tracker.autorun(function() {
		var state = State.findOne({name: 'state'});
		if (state) {

			var status = state && state.status.fStatus;

			if ( status === 1 ) { 
				$("#right-footage-vid")[0].pause();
				$("#right-footage").css({border: "1rem solid red"});
				console.log("pause");
			}
			else { 
				$("#right-footage-vid")[0].play();
				$("#right-footage").css({border: "none"});
				console.log("play");
			}
		}

	});
});

Template.frontFootage.helpers({
	route: function(){
		return Router.current().route.getName();
	},
	footageScenario: function(){

		var state = State.findOne({name: 'state'});
		var scenario = state && state.status.fScenario;
		if (!scenario) var scenarioSource = '<video id="front-footage-vid" autoplay loop preload="auto" poster="/video/driving_footage.png"> <source src="/video/Valeo_Footage_Front_View_04.webm" type="video/webm" /><source src="/video/Valeo_Footage_Front_View_04.mp4" type="video/mp4" />Your browser does not support the video tag.</video>';
		else var scenarioSource = '<video id="front-footage-vid" autoplay loop preload="auto" poster="/video/driving_footage.png"> <source src="/video/Valeo_Footage_Front_View_0'+ scenario +'.webm" type="video/webm" /><source src="/video/Valeo_Footage_Front_View_0'+ scenario +'.mp4" type="video/mp4" />Your browser does not support the video tag.</video>'
			return scenarioSource;

	},
})

Template.rearFootage.helpers({
	footageScenario: function(){
		var state = State.findOne({name: 'state'});
		var scenario = state && state.status.fScenario;
		if (!scenario) var scenarioSource = '<video id="rear-footage-vid" autoplay loop preload="auto" poster="/video/driving_footage.png"> <source src="/video/Valeo_Footage_Rear_View_04.webm" type="video/webm" /><source src="/video/Valeo_Footage_Rear_View_04.mp4" type="video/mp4" />Your browser does not support the video tag.</video>';
		else var scenarioSource = '<video id="rear-footage-vid" autoplay loop preload="auto" poster="/video/driving_footage.png"> <source src="/video/Valeo_Footage_Rear_View_0'+ scenario +'.webm" type="video/webm" /><source src="/video/Valeo_Footage_Rear_View_0'+ scenario +'.mp4" type="video/mp4" />Your browser does not support the video tag.</video>'
			return scenarioSource;
	},
})

Template.leftFootage.helpers({
	footageScenario: function(){
		var state = State.findOne({name: 'state'});
		var scenario = state && state.status.fScenario;
		if (!scenario) var scenarioSource = '<video id="left-footage-vid" autoplay loop preload="auto" poster="/video/driving_footage.png"> <source src="/video/Valeo_Footage_Left_View_04.webm" type="video/webm" /><source src="/video/Valeo_Footage_Left_View_04.mp4" type="video/mp4" />Your browser does not support the video tag.</video>';
		else var scenarioSource = '<video id="left-footage-vid" autoplay loop preload="auto" poster="/video/driving_footage.png"> <source src="/video/Valeo_Footage_Left_View_0'+ scenario +'.webm" type="video/webm" /><source src="/video/Valeo_Footage_Left_View_0'+ scenario +'.mp4" type="video/mp4" />Your browser does not support the video tag.</video>'
			return scenarioSource;
	},
})

Template.rightFootage.helpers({
	footageScenario: function(){
		var state = State.findOne({name: 'state'});
		var scenario = state && state.status.fScenario;
		if (!scenario) var scenarioSource = '<video id="right-footage-vid" autoplay loop preload="auto" poster="/video/driving_footage.png"> <source src="/video/Valeo_Footage_Right_View_04.webm" type="video/webm" /><source src="/video/Valeo_Footage_Right_View_04.mp4" type="video/mp4" />Your browser does not support the video tag.</video>';
		else var scenarioSource = '<video id="right-footage-vid" autoplay loop preload="auto" poster="/video/driving_footage.png"> <source src="/video/Valeo_Footage_Right_View_0'+ scenario +'.webm" type="video/webm" /><source src="/video/Valeo_Footage_Right_View_0'+ scenario +'.mp4" type="video/mp4" />Your browser does not support the video tag.</video>'
			return scenarioSource;
	},
})
