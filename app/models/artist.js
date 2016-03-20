import DS from 'ember-data';
import ModelUpdatedAtMixin from 'fe-ember-candidate/mixins/model-updated-at';

export default DS.Model.extend(ModelUpdatedAtMixin, {
  name: DS.attr('string'),
  basedIn: DS.attr('string'),
  foundingYear: DS.attr('number'),
  albums: DS.hasMany('album')
});
