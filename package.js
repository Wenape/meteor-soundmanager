Package.describe({
  summary: "Adds SoundManager 2 Support",
  version: "0.1.0",
  name: "wenape:meteor-soundmanager",
});

Package.on_use(function(api) {
    api.add_files('client/soundmanager2-jsmin.js', 'client');
});
