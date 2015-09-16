

AutoForm.hooks({
  add_memory: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
        this.done();
    },
    onSuccess: function(formType, result) {
      Router.go('/admin/Memories');
    },
    onError: function(formType, error) {
      return false;
    },
  }
});
