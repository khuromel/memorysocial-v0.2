// BrowserPolicy.content.allowOriginForAll("*.googleapis.com");
// BrowserPolicy.content.allowOriginForAll("*.gstatic.com");
// BrowserPolicy.content.allowOriginForAll("*.bootstrapcdn.com");
// BrowserPolicy.content.allowOriginForAll("*");
//
// BrowserPolicy.content.allowFontDataUrl();
//
//
// BrowserPolicy.framing.disallow();
// BrowserPolicy.content.disallowInlineScripts();
// BrowserPolicy.content.disallowEval();
// BrowserPolicy.content.allowInlineStyles();
// BrowserPolicy.content.allowFontDataUrl();
//
// var trusted = [
//   '*.google-analytics.com',
//   '*.mxpnl.com',
//   '*.zendesk.com',
//   '*.amazonaws.com',
//   '*.memorysocial.com'
// ];
//
// _.each(trusted, function(origin) {
//   origin = "https://" + origin;
//   BrowserPolicy.content.allowOriginForAll(origin);
// });
//
// _.each(trusted, function(origin) {
//   origin = "http://" + origin;
//   BrowserPolicy.content.allowOriginForAll(origin);
// });
