Template.frontDisplay.onRendered(function () {
	$('.ui.sidebar').sidebar('hide');
});
Template.dashboard.onRendered(function () {
	$('.ui.sidebar').sidebar('hide');
});
Template.left.onRendered(function () {
	$('.ui.sidebar').sidebar('hide');
});
Template.right.onRendered(function () {
	$('.ui.sidebar').sidebar('hide');
});
Template.controls.onRendered(function () {
	$('.ui.sidebar').sidebar('hide');
});
Template.layout.events({
	"click #menu-toggle": function (event, temp) {
		$('.ui.sidebar').sidebar('toggle');
	}
});
