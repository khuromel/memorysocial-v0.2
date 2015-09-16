Template['memories'].helpers({

  memory_list: function (){
      return Memories.find();
      }
});

Template['memories'].events({
  "click .delete": function(){
    if(confirm("Are you sure?"))
    {
      Meteor.call('deletememories', this._id,  function(error,response)
      {
        alert("Deleted")
      });
    }
    else
    {
        e.preventDefault();
    }
  }
});
