Template.hud.onRendered(function () {
    $('.ui.sidebar').sidebar('hide');
});
Template.dashboard.onRendered(function () {
    $('.ui.sidebar').sidebar('hide');
});
Template.settings.onRendered(function () {
    $('.ui.sidebar').sidebar('hide');
});
Template.widgets.onRendered(function () {
    $('.ui.sidebar').sidebar('hide');
});
Template.controller.onRendered(function () {
    $('.ui.sidebar').sidebar('hide');
});
Template.layout.events({
  "click #menu-toggle": function (event, temp) {
    $('.ui.sidebar')
    .sidebar('toggle');
  }
});
