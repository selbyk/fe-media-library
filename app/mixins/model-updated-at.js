import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Mixin.create({
  init: function() {
    this._super(...arguments);
    this.set("updatedAtShort", Ember.computed('updatedAt', () => {
        let d = new Date(this.get('updatedAt'));
        //let d = this.get('updatedAt');
        //return d;
        return `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`;
    }));
  },
  updatedAt: DS.attr('date')
});
