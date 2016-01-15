// create admin
if (Meteor.users.find().count() === 0) {

  var essen = Accounts.createUser({
    profile: {
      name: 'Administrator'
    },
    username: "admin",
    email: "perchais.quentin@gmail.com",
    password: "admin",
  });
}
