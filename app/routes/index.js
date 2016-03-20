import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Route.extend({
  queryParams: {
    sort_on: {
      refreshModel: true
    },
    sort_direction: {
      refreshModel: true
    },
    per_page: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    }
  },
  setupController(controller, model) {
    controller.set('artists', model);
  },
  model(params) {
    if (!params) {
      params = {};
    }
    _.defaults(params, {
      sort_on: 'name',
      sort_direction: 'asc',
      per_page: 5,
      page: 1
    });
    return this.store.query('artist', params);
  }
});
