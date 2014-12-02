Package.describe({
  summary: "Adds SoundManager 2 Support",
  version: "0.1.7",
  name: "wenape:meteor-soundmanager",
});

Package.on_use(function(api) {
    api.add_files('client/soundmanager2.js', 'client');
});
