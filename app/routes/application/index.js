import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Route.extend({
  setupController(controller, model) {
    controller.set('artists', model);
  },
  model(params) {
    if (!params) {
      params = {};
    }
    _.defaults(params, {
      sort_on: 'name',
      sort_direction: 'asv',
      per_page: 5,
      page: 1
    });
    return this.store.query('artist', params);
  }
});
