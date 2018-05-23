Package.describe({
  name    : 'mehrdadarvin:jstree',
  summary : 'A Meteor wrapper package for the jstree plugin.',
  git     : 'https://github.com/mehrdadarvin/jstree',
  version : '3.3.5'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.6.1');
  api.addFiles('dist/jstree.js', 'client');
  api.addFiles('dist/themes/default/style.css', 'client');
  api.addAssets([
    'dist/themes/default/32px.png',
    'dist/themes/default/40px.png',
    'dist/themes/default/throbber.gif'
  ], 'client');
  api.export('jstree', 'client');
});
