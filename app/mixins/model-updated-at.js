import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Mixin.create({
  init: function() {
    this._super(...arguments);
    this.set("updated_at", DS.attr('string'));
    this.set("updated_at_formatted", Ember.computed('updated_at', () => {
        //let d = new Date(this.get('updated_at'));
        let d = this.get('updated_at');
        return d;
        //return `${d.getSMonth()}/${d.getDate()}/${d.getYear()}`;
    }));
  }
});
