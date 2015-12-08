Package.describe({
  name: 'smoiz:emailjs',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'A Meteor package wrapper for emailjs.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ErikGartner/meteor-emailjs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('emailjs.js', 'server');
  api.export('Email', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('smoiz:emailjs');
  api.addFiles('tests/emailjs-tests.js', ['server']);
});

Npm.depends({
  emailjs: "1.0.1"
});
