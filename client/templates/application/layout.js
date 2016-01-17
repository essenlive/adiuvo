Template.layout.events({
  "click #menu-toggle": function (event, temp) {
    $('.ui.sidebar')
    .sidebar('toggle');
  }
});
Template.layout.onRendered(function(){
    $('.ui.sidebar').sidebar('hide');
    console.log("testet");
});
