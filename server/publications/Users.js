
Meteor.publish('userData', function () {
  return Meteor.users.find({_id: this.userId}, {fields: {emails: 1, profile: 1, services: 1}});
});

Meteor.publish('UsersGetId', function (username) {
  check(id, String)
  return Meteor.users.find({username: username}, {limit: 1})
});
