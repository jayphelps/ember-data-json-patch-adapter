var EmberObject = Ember.Object,
    MutableArray = Ember.MutableArray,
    Mixin = Ember.Mixin,
    get = Ember.get,
    required = Ember.required;

var PatchOperationMixin = Mixin.create({
  op: required(),

  toJSON: function() {
    return {
      op: get(this, 'op'),
      path: get(this, 'path')
    };
  }
});

var PatchDocument = EmberObject.extend(MutableArray, {
  toJSON: function() {
    var json = [];

    for (var i = 0, l = get(this, 'length'); i < l; i++) {
      json.push(this.objectAt(i).toJSON());
    }

    return json;
  }
});

var A = Ember.A,
    assert = Ember.assert;


var toString = Object.prototype.toString;

function isObject(obj) {
  return toString.apply(obj) === '[object Object]';
}

function generatePatch(obj) {
  var patches = [],
      value;

  for (var key in obj) {
    value = obj[key];

    patches.push({
      op: 'replace',
      path: getPath(key, value),
      value: value
    });
  }

  return patches;
}

//window.slasherize = slasherize;

function escapePathComponent(str) {
  if (str.indexOf('/') === -1 && str.indexOf('~') === -1) {
    return str;
  } else {
    return str.replace(/~/g, '~0').replace(/\//g, '~1');
  }
}

function getPath(key, value) {
  var path = '';

  path += '/' + key;

  if (isObject(value)) {
    path += getPath(value);
  }

  return path;
}

var PatchRecordSerializerMixin = Ember.Mixin.create({
  serializeIntoPatch: function(type, record) {
    var root = underscore(decamelize(type.typeKey)),
      changes = record._inFlightAttributes;


    debugger;
    /*;
        data[root] = this.serialize(record);*/
  }
});


export default PatchRecordSerializerMixin;

// { "op": "replace", "path": "/a/b/c", "value": 42 }


var json = {
  person: {
    first_name: 'Bilbo',
    last_name: 'Baggins'
  }
};