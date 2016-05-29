Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
});
Router.route('/front', {
    name: 'frontDisplay'
});
Router.route('/dashboard', {
    name: 'dashboard'
});
Router.route('/left', {
    name: 'left'
});
Router.route('/right', {
    name: 'right'
});
Router.route('/', {
    name: 'controls'
});

//EVENT ROUTES
Router.route('/events/:_id/edit', {
  name: 'eventEdit',
  data: function() { return Events.findOne(this.params._id); }
});

