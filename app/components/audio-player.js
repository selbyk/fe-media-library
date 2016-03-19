import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    let _this = this;
    audiojs.events.ready(function() {
      _this.set('as', audiojs.create(_this.$(`audio`).get()));
    });
}
});
