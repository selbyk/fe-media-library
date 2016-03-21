import Ember from 'ember';
import {
  ActiveModelSerializer
} from 'active-model-adapter';

const inflector = new Ember.Inflector(Ember.Inflector.defaultRules);

export default ActiveModelSerializer.extend({
  serializeIntoHash(hash, typeClass, snapshot, options) {
    let _this = this;
    let normalizedRootKey = this.payloadKeyFromModelName(typeClass.modelName);
    let record = snapshot.record;
    // serialize the model
    hash[normalizedRootKey] = this.serialize(snapshot, options);
    // set the id, ember tries to assign a new one and gets mad if not
    if (snapshot.id) {
      hash[normalizedRootKey].id = snapshot.id;
    }
    // take our relationships and put their ids in an array since the server
    // endpoints doesn't do that like sql would
    record.eachRelationship(function(name, descriptor) {
      if (descriptor.kind === 'hasMany') {
        hash[normalizedRootKey][inflector.singularize(name) + '_ids'] = record.get(name).map((relationRecord) => {
          let id = relationRecord.get('id');
          if (id) {
            if (typeof id === 'string') {
              return Number.parseInt(id);
            } else {
              return id;
            }
          }
        });
      }
    });
    // make sure all ids are an integer and not a string...
    Object.keys(hash[normalizedRootKey]).forEach((key) => {
      if (key === 'id' || /_id$/.test(key)) {
        if (typeof hash[normalizedRootKey][key] === 'string') {
          hash[normalizedRootKey][key] = Number.parseInt(hash[normalizedRootKey][key]);
        }
      }
    });
    // delete updated_at because the server should be taking care of that anyway
    delete hash[normalizedRootKey].updated_at;
  }
});
