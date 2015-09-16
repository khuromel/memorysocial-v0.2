var AdminTemplate = 'AdminLayout';

Router.route('admin', {
    subscriptions:function() {
        return [
            Meteor.subscribe("Publications"),
            Meteor.subscribe("Issues"),
            Meteor.subscribe("Articles"),
            Meteor.subscribe("Media"),
        ]
    },
    name:'admin',
    layoutTemplate: AdminTemplate,
    action:function() {
        this.render('admin');
    },
    title:'Dashboard'
});



/********************************
/ Users
/********************************/

Router.route('admin/users', {
    subscriptions:function() {
        return [
            Meteor.subscribe("userData")
        ]
    },
    action:function() {
        this.render('users');
    },
    name:'Users',
    layoutTemplate: AdminTemplate,
    title:'Users',
    parent:'home'
})

Router.route('admin/add-user', {
    action:function() {
        this.render('add_user');
    },
    name:'Insert Users',
    layoutTemplate: AdminTemplate,
    title:'Create',
    parent:'home'
})

Router.route('admin/users/:_id', {
    subscriptions:function() {
        return [
            Meteor.subscribe("UsersGetId", this.params._id)
        ]
    },
    action:function() {
        this.render('update_user');
    },
    data: function(){
        return Users.findOne({_id: this.params._id});
    },
    name:'user.show',
    layoutTemplate: AdminTemplate,
    title:'Update',
    parent:'home'
})

/********************************
/ Memories
/********************************/

Router.route('admin/memories', {
    subscriptions:function() {
        return [
            Meteor.subscribe("Memories")
        ]
    },
    action:function() {
        this.render('memories');
    },
    name:'Memories',
    layoutTemplate: AdminTemplate,
    title:'Memories',
    parent:'home'
})

Router.route('admin/add-memory', {
    action:function() {
        this.render('add_memory');
    },
    name:'Insert Memories',
    layoutTemplate: AdminTemplate,
    title:'Create',
    parent:'home'
})

Router.route('admin/memories/:_id', {
    subscriptions:function() {
        return [
            Meteor.subscribe("MemoriesGetId", this.params._id)
        ]
    },
    action:function() {
        this.render('update_memory');
    },
    data: function(){
        return Memories.findOne({_id: this.params._id});
    },
    name:'memory.show',
    layoutTemplate: AdminTemplate,
    title:'Update',
    parent:'home'
})
