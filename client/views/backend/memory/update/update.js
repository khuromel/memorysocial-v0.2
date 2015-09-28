var UserPhotos= new ReactiveVar;

Template.update_memory.events({
  "click button.upload": function(){
    List = []
    var files_bag = $("input.file_bag")[0].files;
    var memory_id = String(this._id);
    S3.upload({
      files:files_bag,
      path:"memories"
    },function(error,result){
      Meteor.call("insertMedia", result, memory_id, function(error, result){
        if (error) {
          alert(error)
        } else {
                   // examine result
                 }
               })
    });

  },
})

Template.update_memory.rendered = function() {
  if(!this._rendered) {
    this._rendered = true;
  }
  $(".owl-carousel").owlCarousel();
  $('.fancybox').fancybox();

}

Template.update_memory.helpers({
  "files": function(){
    return S3.collection.find();
  },
  "memory":function(){
    var memory =  Memories.findOne({_id: this._id});
    return memory;
  },
  "photos":function(){
    UserPhotos = Meteor.call('getFacebookImages');
    return UserPhotos;
    
  }
})

AutoForm.hooks({
  update_memory: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
      this.done();
    },
    onSuccess: function(formType, result) {
      Router.go('/admin/Memories');
    },
    onError: function(formType, error) {
      console.log("Submission Failed");
      return false;
    },
  }
});
