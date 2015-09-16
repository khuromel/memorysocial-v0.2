
Meteor.publish('userData', function () {
  return Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
});

Meteor.publish('UsersGetId', function (username) {
  check(id, String)
  return Meteor.users.find({username: username}, {limit: 1})
});
