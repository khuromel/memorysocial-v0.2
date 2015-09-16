Template.header.created = function () {
  Session.set('isActive', false);
  Session.set('showLogin', false);
};

Template['header'].helpers({
  showLogin: function () {
    return Session.get('showLogin');
  },
  isActive: function () {
    return Session.get('isActive') ? 'active' : '';
  },
  animateClass: function () {
    return Session.get('isActive') ? 'fadeIn' : 'fadeOut';
  },
  iconClass: function () {
    return Meteor.user() ? 'user' : 'sign in';
  },
  'NavMenu':function() {
    return [
      { "text":"Tasting Notes", "routepath":"/tasting-notes" },
      { "text":"My Cellar","routepath":"/my-cellar" },
      { "text":"TWA ARticles","routepath":"/twa-articles"},
      { "text":"Hedonist's Gaze", "routepath":"/hedonist-gaze" },
      { "text": "Blogs and Videos", "routepath": "/blogs-videos"},
      { "text": "Resources", "routepath": "resources"},
        { "text": "TWA Store", "routepath": "https://www.erobertparker.com/WAStore/"},
    ]
  }
});

Template['header'].events({
  'click .resize.button' : function () {
    var showLogin = Session.get('showLogin');

    Session.set('isActive', !Session.get('isActive'));

    setTimeout(function () {
      Session.set('showLogin', !Session.get('showLogin'));
    }, 600);
  },

  'click .log-out.button' : function () {
    Meteor.logout();
  }
});

