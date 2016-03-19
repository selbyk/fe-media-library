import DS from 'ember-data';
import ModelUpdatedAtMixin from 'fe-ember-candidate/mixins/model-updated-at';

export default DS.Model.extend(ModelUpdatedAtMixin, {
  name: DS.attr('string'),
  based_in: DS.attr('string'),
  founding_year: DS.attr('number'),
  albums: DS.hasMany('album')
});
