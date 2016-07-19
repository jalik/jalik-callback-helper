Package.describe({
    name: 'jalik:callback-helper',
    version: '0.1.1',
    author: 'karl.stein.pro@gmail.com',
    summary: 'Callback helper',
    homepage: 'https://github.com/jalik/jalik-callback-helper',
    git: 'https://github.com/jalik/jalik-callback-helper.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.3.4.4');
    api.use([
        'ecmascript@0.4.3',
        'underscore@1.0.8'
    ]);
    api.mainModule('callback-helper.js');
});
