var Mixin = Ember.Mixin,
    get = Ember.get;

var PatchRecordAdapterMixin = Mixin.create({
  updateRecord: function(store, type, record) {
    var id = get(record, 'id'),
        serializer = store.serializerFor(type.typeKey),
        patch = serializer.serializeIntoPatch(type, record),
        url = this.buildURL(type.typeKey, id);

    return this.ajax(url, 'PATCH', { data: data });
  }
});


export default PatchRecordAdapterMixin;