AutoForm.hooks({
  add_memory: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
        this.done();
    },
    onSuccess: function(formType, result) {
      Router.go('/admin/Memories');
    },
    onError: function(formType, error) {
      console.log(error)
      return false;
    },
  }
});


Template.add_memory.helpers({
  settings: function() {
    return {
      position: Session.get("position"),
      limit: 10,
      rules: [
        {
          // token: '',
          collection: Meteor.users,
          field: 'username',
          matchAll: true,
          template: Template.userDetails
        }
      ]
    };
  },
  legends: function() {
    return Meteor.users.find();
  },
  "files": function(){
      return S3.collection.find();
  }
});


Template.add_memory.events({
  "autocompleteselect input": function(event, template, doc) {
    $( "input[name$='user']" ).val( doc._id );
    $("#search_user").val('');
    $("#search_user").attr("placeholder", "Search user...");
    //console.log("selected ", doc);
  },
  "click button.upload": function(){
      List = []
      var files_bag = $("input.file_bag")[0].files;
      var memory_id = String(this._id);
      S3.upload({
              files:files_bag,
              path:"Memories"
          },function(error,result){
            console.log(result);
            console.log(memory_id)
            Meteor.call("insertMedia", result, memory_id, function(error, result){
              if (error) {
                alert(error)
               } else {
                 // examine result
               }
            })
      });

  },
});
