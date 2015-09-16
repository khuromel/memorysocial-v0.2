

AutoForm.hooks({
  add_user: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
        this.done();
    },
    onSuccess: function(formType, result) {
      Router.go('/admin/Users');
    },
    onError: function(formType, error) {
      return false;
    },
  }
});
