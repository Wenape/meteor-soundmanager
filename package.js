Package.describe({
  name: "wenape:soundmanager",
  summary: "Adds SoundManager 2 Support",
  version: "0.1.0",
  git: 'https://github.com/Wenape/meteor-soundmanager'
});

Package.on_use(function(api) {
    api.add_files('client/soundmanager2.js', 'client');
});
