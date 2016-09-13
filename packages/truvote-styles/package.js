Package.describe({
  name: "truvote-styles",
  summary: "Tru.Vote styles, based on Nova basic styles package",
  version: "0.0.1",
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([
    'nova:core@0.26.5-nova',
    'fourseven:scss@3.8.0_1',
  ]);

  api.addFiles([
    'lib/stylesheets/bootstrap.css',
    'lib/stylesheets/main.scss'
  ], ['client']);

});
