Package.describe({
    name: 'jalik:callback-helper',
    version: '0.1.0',
    author: 'karl.stein.pro@gmail.com',
    summary: 'Callback helper',
    homepage: 'https://github.com/jalik/jalik-callback-helper',
    git: 'https://github.com/jalik/jalik-callback-helper.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');
    api.use('underscore');
    api.addFiles('callback-helper.js');
    api.export('CallbackHelper');
});
