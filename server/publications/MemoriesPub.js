
Meteor.publish('Memories', function () {
  return Memories.find();
});

Meteor.publish('MemoriesGetId', function (id) {
  check(id, String)
  return Memories.find({_id: id}, {limit: 1})
});
