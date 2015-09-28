Template['users'].helpers({

  users_list: function (){
      return Meteor.users.find();
      }
});

Template['users'].events({
  "click .delete": function(){
    if(confirm("Are you sure?"))
    {
      Meteor.call('deleteusers', this._id,  function(error,response)
      {
        alert("Deleted")
      });
    }
    else
    {
        e.preventDefault();
    }
  },
});
