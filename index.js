'use strict';

var mustache = require('mustache');

var stylizeMustache = function(pattern) {

  var self = {
    extend: '_compile',
    init: function(pattern, cb) {

      var template = mustache.render(pattern.template, pattern.data, pattern.partials);

      return template;
    }
  }

  return self;
}


module.exports = stylizeMustache();
