import DS from 'ember-data';
import ModelUpdatedAtMixin from 'fe-ember-candidate/mixins/model-updated-at';

export default DS.Model.extend(ModelUpdatedAtMixin, {
  album: DS.belongsTo('album'),
  author: DS.attr('string'),
  message: DS.attr('string')
});
