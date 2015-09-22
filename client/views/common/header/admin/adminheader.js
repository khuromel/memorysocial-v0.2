

Meteor.subscribe("userData");
Template['adminheader'].helpers({

    // selects items to show on navigation based on role. to be added after roles has been added
    'NavMenu':function() {
        return [
            { 'text':'Dashboard', 'image':'/images/dashboard.png', 'routepath':'/admin' },
            { 'text':'Users', 'image':'/images/users.png', 'routepath':'/admin/users' },
            { 'text':'Memories', 'image':'/images/memories.png', 'routepath':'/admin/memories' },
        ]
    },
    'user_info':function(){
      var user = Meteor.users.findOne({});
      //  console.log(user)
      return user;
    }

});

Template['adminheader'].events({

});
