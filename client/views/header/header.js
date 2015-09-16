

Template['header'].helpers({
  'NavMenu':function() {
      return [
          { 'text':'Dashboard', 'image':'/images/admin/icon_monitor.svg', 'routepath':'/admin' },
      ]
  }
});

Template['header'].events({
  'click .log-out.button' : function () {
    Meteor.logout();
  }
});
