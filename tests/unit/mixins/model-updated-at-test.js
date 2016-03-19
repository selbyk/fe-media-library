import Ember from 'ember';
import ModelUpdatedAtMixin from 'fe-ember-candidate/mixins/model-updated-at';
import { module, test } from 'qunit';

module('Unit | Mixin | model updated at');

// Replace this with your real tests.
test('it works', function(assert) {
  let ModelUpdatedAtObject = Ember.Object.extend(ModelUpdatedAtMixin);
  let subject = ModelUpdatedAtObject.create();
  assert.ok(subject);
});
