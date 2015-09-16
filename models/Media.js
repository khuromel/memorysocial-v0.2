Schemas = {};
Meteor.isClient && Template.registerHelper("Schemas", Schemas);

Schemas.media = new SimpleSchema({
    created_at:{
        type:Date,
        denyUpdate:true
    },
    updated_at: {
        type: Date,
    },
    created_by: {
        type:String
    },
    file: {
      type: Object,
      optional:true
    },
    'file.name': {
        type:String,
        optional:true
    },
    'file.original_name': {
        type:String,
        optional:true
    },
    'file.size': {
        type:String,
        optional:true
    },
    'file.type': {
        type:String,
        optional:true
    },
    url: {
        type:String,
        optional:true
    },
    tags: {
        type:[String],
        optional:true
    },
    status: {
        type:[String],
        optional:true
    }
})

Collections = {};
Meteor.isClient && Template.registerHelper("Collections", Collections);
Media = Collections.Media = new Mongo.Collection("media");
Media.attachSchema(Schemas.media);

if (Meteor.isServer) {
    Media.allow({
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
