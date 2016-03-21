import {
  ActiveModelSerializer
} from 'active-model-adapter';

export default ActiveModelSerializer.extend({
  // Remove updated_at because it shouldn't be posted
  serializeIntoHash(data, type, record, options) {
    var root = record.modelName;
    data[root] = this.serialize(record, options);
    delete data[root].updated_at;
  }
});
