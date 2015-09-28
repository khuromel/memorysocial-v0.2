
Meteor.publish('userData', function () {
  return Meteor.users.find({_id: this.userId});
});

Meteor.publish('UsersGetId', function (username) {
  check(id, String)
  return Meteor.users.find({username: username}, {limit: 1})
});


