import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('audio-player', 'Integration | Component | audio player', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{audio-player}}`);

  assert.equal(this.$().text().trim(), '00:00/00:00');

  // Template block usage:
  this.render(hbs `{{#audio-player}}test{{/audio-player}}`);

  assert.equal(this.$().text().trim(), '00:00/00:00                      \ntest');
});
