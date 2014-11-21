Package.describe({
    summary: "Adds SoundManager 2 Support"
});

Package.on_use(function(api) {
    api.add_files('client/soundmanager2-jsmin.js', 'client');
});