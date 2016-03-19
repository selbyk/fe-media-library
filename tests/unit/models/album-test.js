import { moduleForModel, test } from 'ember-qunit';

moduleForModel('album', 'Unit | Model | album', {
  // Specify the other units that are required for this test.
  needs: ['model:artist', 'model:comment']
});

test('it exists', function(assert) {
  let model = this.subject({});
  assert.ok(!!model);
});
