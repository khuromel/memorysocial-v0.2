Schemas = {};
Meteor.isClient && Template.registerHelper("Schemas", Schemas);

Schemas.memory = new SimpleSchema({
    user: {
      type: Object,
      optional:true
    },
    'user._id': {
        type:String,
        optional:true
    },
    name: {
        type:String,
        optional:true
    },
    description: {
        type:String,
        optional:true
    },
    media: {
        type: Array,
        label: "Media",
        optional: true,
        minCount: 0,
        maxCount: 20
    },
    'media.$': {
        type: Object,
        optional: true,
    },
    'media.$._id': {
        type: String,
        optional: true,
    },
    'media.$.type': {
        type: String,
        optional: true,
    },
    'media.$.url': {
        type: String,
        optional: true,
    },
    tags: {
        type:[String],
        optional:true
    },
    status: {
        type:[String],
        optional:true
    },
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

})

Collections = {};
Meteor.isClient && Template.registerHelper("Collections", Collections);
Memories = Collections.Memories = new Mongo.Collection("memories");
Memories.attachSchema(Schemas.memory);
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
