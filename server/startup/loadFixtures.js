function loadFixture(fixtures, collection) {
  var i;

  for (i = 0; i < fixtures.length; i+= 1) {
    //collection.remove({ });
    collection.insert(fixtures[i]);
  }
}

Meteor.startup(function () {
  //loadFixture(Fixtures['dummyFixture'], DummyCollection);
  //process.env.MONGO_URL = 'mongodb://twa:sm3llandspit@candidate.19.mongolayer.com:11146,candidate.4.mongolayer.com:10690/RPOnline?replicaSet=set-55a4e4ce133c7b61870004e7'
});
