var Schemas = {};


Schemas.UserProfile = new SimpleSchema({
    first_name: {
        type: String,
        regEx: /^[a-zA-Z-]{2,25}$/,
        optional: true
    },
    last_name: {
        type: String,
        regEx: /^[a-zA-Z]{2,25}$/,
        optional: true
    },
    birthday: {
        type: Date,
        optional: true
    },
    gender: {
        type: String,
        allowedValues: ['Male', 'Female'],
        optional: true
    },
    country: {
        type: String,
        label:"Location",
        optional: true
    },
    avatar: {
        type: String,
        optional: true
    },
    mobile_phone: {
        type: String,
        label: "Mobile no",
        optional:true
    }
});

Schemas.User = new SimpleSchema({
    username: {
        type: String,
        regEx: /^[a-z0-9A-Z_]{3,15}$/,
        optional: true
    },
    emails: {
        type: [Object],
        optional: true
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schemas.UserProfile,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    orbit_roles: {
        type: [String],
        optional: true
    }
});

// Collection already exists, no need to create the collection. Let's just assign.
Meteor.users.attachSchema(Schemas.User);
