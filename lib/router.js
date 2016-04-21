Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
});
Router.route('/', {
    name: 'frontDisplay'
});
Router.route('/dashboard', {
    name: 'dashboard'
});
Router.route('/mirrors', {
    name: 'mirrors'
});
Router.route('/settings', {
    name: 'settings'
});
Router.route('/controls', {
    name: 'controls'
});
