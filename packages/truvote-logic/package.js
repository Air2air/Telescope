Package.describe({
  name: "truvote-logic",
  summary: "Tru.Vote business logic, custom package",
  version: "0.0.1",
});

Package.onUse( function(api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'nova:core',
    'nova:lib',
    'nova:posts',
    'nova:users',
    'nova:base-components',
  ]);

  api.addFiles([
    'lib/modules.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/server/templates.js',
    'lib/server/dexi/index.js'
  ], ['server']);

  api.addAssets([
    'lib/server/emails/customNewPost.handlebars',
    'lib/server/emails/customEmail.handlebars'
  ], ['server']);

});
