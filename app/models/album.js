import DS from 'ember-data';
import ModelUpdatedAtMixin from 'fe-ember-candidate/mixins/model-updated-at';

export default DS.Model.extend(ModelUpdatedAtMixin, {
  artist: DS.belongsTo('artist'),
  name: DS.attr('string'),
  year: DS.attr('number'),
  totalSold: DS.attr('number'),
  comments: DS.hasMany('comment')
});
