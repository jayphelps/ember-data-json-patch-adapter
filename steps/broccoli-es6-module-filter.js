module.exports = function (tree) {
  var filterES6Modules = require('broccoli-es6-module-filter'),
      pickFiles = require('broccoli-static-compiler');

  var cjsTree = filterES6Modules(pickFiles(tree, {
    srcDir: '/',
    destDir: '/cjs'
  }), {
    moduleType: 'cjs'
  });

  var amdTree = filterES6Modules(pickFiles(tree, {
    srcDir: '/',
    destDir: '/amd'
  }), {
    moduleType: 'amd'
  });

  return [cjsTree, amdTree];
};