import {
  ActiveModelSerializer
} from 'active-model-adapter';

export default ActiveModelSerializer.extend({
  // Remove updated_at because it shouldn't be posted
  serializeIntoHash(data, type, record, options) {
    var root = record.modelName;
    data[root] = this.serialize(record, options);
    if(typeof data[root].album_id === 'string'){
      data[root].album_id = Number.parseInt(data[root].album_id);
    }
    delete data[root].updated_at;
  }
});
