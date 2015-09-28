var article_result_count =  new ReactiveVar;
article_result_count.set(0)
Template.admin.created = function() {
	Session.set('isSimple', false);
}

Template['admin'].helpers({
	user_count:function(){
		return Meteor.users.find({}).count();
	},
	memory_count:function(){
		return Memories.find({}).count();
	},
	connection_count:function(){
		//Connections.find({}).count();
		return null;
	},
});

Template['admin'].events({

  "click #getMemory":function(){
    Meteor.call('getFacebookImages');
  }
});
