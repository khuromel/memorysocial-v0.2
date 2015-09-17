Meteor.methods
({
  insertMedia:function(result, memory_id){
    check(result, Object)
    check(memory_id, String)

    var item = {}
    item.created_at = new Date()
    item.updated_at = new Date()
    item.created_by = 'Admin'
    item.file = {name: result.file.name, size: result.total, type: result.file.type}
    item.url  = result.url
    item.tags  = ["memories-image"]
    item.status = ["published"]

    var media_id = Media.insert(item);

    var memory = Memories.findOne({_id: memory_id});
    if(memory.media){
      memory.media.push({'_id': media_id, 'url': result.url});
    }else{
      memory.media = [{'_id': media_id, 'url': result.url}];
    }

    Memories.update(memory_id, {"$set": memory});

  },
});
