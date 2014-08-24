/* global describe, it */
'use strict';

var assert = require('assert');

describe('#prop', function () {
  var prop = require('../../src/annotation').prop;

  it('should parse the prop annotation', function () {
    assert.deepEqual(prop.parse('base'), {
      type : 'Map',
      name : 'base'
    });

    assert.deepEqual(prop.parse('{Function} base.default'), {
      type : 'Function',
      name : 'base.default'
    });

    assert.deepEqual(prop.parse('{Function} base.default - description'), {
      type : 'Function',
      name : 'base.default',
      description : 'description'
    });

    assert.deepEqual(prop.parse('{Function} base.default (default) - description'), {
      type : 'Function',
      name : 'base.default',
      default : 'default',
      description : 'description'
    });

    assert.deepEqual(prop.parse('{Function} base.default (default) - description (with parens)'), {
      type : 'Function',
      name : 'base.default',
      default : 'default',
      description : 'description (with parens)'
    });

  });
});
