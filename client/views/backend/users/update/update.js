Template.update_user.events({
    "click button.upload": function(){
        List = []
        var files_bag = $("input.file_bag")[0].files;
        var user_id = String(this._id);
        S3.upload({
                files:files_bag,
                path:"Memories"
            },function(error,result){
              console.log(result);
              console.log(user_id)
              Meteor.call("insertMedia", result, user_id, function(error, result){
                if (error) {
                  alert(error)
                 } else {
                   // examine result
                 }
              })
        });

    },
})

Template.update_user.helpers({
  "files": function(){
        return S3.collection.find();
    }
})

AutoForm.hooks({
  update_user: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
        this.done();
    },
    onSuccess: function(formType, result) {
      Router.go('/admin/Users');
    },
    onError: function(formType, error) {
      console.log("Submission Failed");
      return false;
    },
  }
});
