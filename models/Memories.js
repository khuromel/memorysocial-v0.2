Schemas = {};
Meteor.isClient && Template.registerHelper("Schemas", Schemas);

Schemas.memories = new SimpleSchema({

    user: {
      type: String,
      label: "User Id",
      optional: true,
    },
    name: {
        type:String,
        optional:true
    },
    post_id: {
        type:String,
        optional:true
    },    
    image_thumbnail: {
        type:String,
        optional:true
    },         
    image_large: {
        type:String,
        optional:true
    }, 
    images: {
        type: Array,
        label: "Image",
        optional: true,
        minCount: 0,
        maxCount: 20
    },
    'images.$': {
        type: Object,
        optional: true,
    },
    'images.$.height': {
        type: String,
        optional: true,
    },
    'images.$.width': {
        type: String,
        optional: true,
    },
    'images.$.source': {
        type: String,
        optional: true,
    },
    tags: {
        type:[String],
        optional:true
    },
    status: {
        type:String,
        optional:true
    },
    created_at:{
        type:Date,
    },
    updated_at: {
        type: Date,
    },
    created_by: {
        type:String
    },

})

Collections = {};
Meteor.isClient && Template.registerHelper("Collections", Collections);
Memories = Collections.Memories = new Mongo.Collection("memories");
Memories.attachSchema(Schemas.memories);

if (Meteor.isServer) {
    Memories.allow({
        insert:function() {
            return true;
        },
        update:function() {
            return true;
        },
        remove:function() {
            return true;
        }
    })
}
