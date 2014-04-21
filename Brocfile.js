var broccoli = require('broccoli'),
    mergeTrees = require('broccoli-merge-trees')
    makeModules = require('broccoli-dist-es6-module');

var trees = makeModules('lib', {
  main: 'index',
  global: 'MyLib',
  packageName: 'my-lib',
  shim: {
    'ember': 'Ember'
  }
});

console.log(trees);

module.exports = mergeTrees(trees, { overwrite: true });