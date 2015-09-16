Meteor.publish('Media', function () {
  return Media.find();
});

Meteor.publish('MediaGetId', function (id) {
  check(id, String)
  return Media.find({_id: id}, {limit: 1})
});
