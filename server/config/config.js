
S3.config = {
    key: 'AKIAJUECULH7YKWPMCXQ',
    secret: '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',
    bucket: 'memorysocial.com',
    region: 'ap-southeast-1'
};

ServiceConfiguration.configurations.remove({
    service: 'facebook'
});
 
ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '1692783320941792',
    secret: '8625b1df28ae2b6824fb43bd34317cdd'
});
