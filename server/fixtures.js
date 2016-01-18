// create admin
if (Meteor.users.find().count() === 0) {

  var essen = Accounts.createUser({
    profile: {
      name: 'Quentin Perchais'
    },
    username: "user",
    email: "perchais.quentin@gmail.com",
    password: "user",
  });
}
Meteor.startup(function(){

});
