if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // create admin
  if (Meteor.users.find().count() === 0) {

    var essen = Accounts.createUser({
      profile: {
        name: 'Quentin Perchais'
      },
      username: "essen",
      email: "perchais.quentin@gmail.com",
      password: "151190",
    });
  }

  var essen = Meteor.users.findOne({username: 'essen'});

  for (var i = 0; i < 10; i++) {
    Posts.insert({
      title: 'Test post #' + i,
      author: essen.profile.name,
      userId: essen._id,
      url: 'http://google.com/?q=test-' + i,
      submitted: new Date(now - i * 3600 * 1000 + 1),
      commentsCount: 0,
      upvoters: [], votes: 0
    });
  }
}
