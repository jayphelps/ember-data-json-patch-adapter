module.exports = function (tree) {
  var concat = require('broccoli-concat');

  return concat(tree, {
    inputFiles: [
      '../dist/**/*.js'
    ],
    outputFile: '../dist/out.js'
  });
};