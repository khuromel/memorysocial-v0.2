Meteor.methods
({
  getFacebookImages:function(){
      var Fiber = Npm.require('fibers');
      var user_info = Meteor.users.findOne({_id: this.userId}, {fields: {emails: 1, profile: 1, services: 1}});
      var token =FBGraph.setAccessToken(user_info.services.facebook.accessToken);

      console.log("access token:"+user_info.services.facebook.accessToken);
      //console.dir(token);
      var Data;
      FBGraph.get("/me/photos?fields=images,name,created_time&type=uploaded", function(err, results) {

        Data = results.data;
        console.log(Data.length);
        for(var x=0; x<Data.length; x++){
            var images = Data[x].images;
            var image_thumbnail = "";
            var image_large = "";
            for(var z=0; z<images.length;z++){
                if(images[z].height < "300"){
                    image_thumbnail = images[z].source;
                    continue;
                }
                if(images[z].height > "600"){
                    image_large = images[z].source;
                    continue;
                }
            }
            //Insert Memory
            NewMemory = {
                "user" : user_info._id,
                "post_id" : Data[x].id,
                "name" : Data[x].name,
                "created_at" : Data[x].created_time,
                "updated_at" : new Date(),
                "created_by" : "admin",
                "images" : images,
                "image_thumbnail":image_thumbnail,
                "image_large":image_large
            }
            console.dir(NewMemory);
            Fiber(function ()
            {
                Memories.update({post_id:Data[x].id},{$set:NewMemory},{upsert:true});
            }).run();
        }
    });
      return Data;
  },
});
