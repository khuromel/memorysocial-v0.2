var AdminTemplate = 'AdminLayout';


// Home Route
Router.route('/', {
  name: 'index',
  layoutTemplate:AdminTemplate,
  action: function () {
    this.render('index');
    SEO.set({ title: 'Home - ' + Meteor.App.NAME });
  }
});


var mustBeSignedIn = function() {
    if (!(Meteor.user() || Meteor.loggingIn())) {
        Router.go('index');
            this.next();
    } else {
        this.next();
    }
};
var goHome = function() {
    if (Meteor.user()) {
        Router.go('admin');
            this.next();
    } else {
        this.next();
    }
};

Router.onBeforeAction(mustBeSignedIn, {except: ['home']});
Router.onBeforeAction(goHome, {only: ['index', 'home']});
