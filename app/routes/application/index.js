import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    controller.set('artists', model);
  },
  model(params){
    if(!params) {
      params = {};
    }
    return this.store.query('artist', params);
  }
});
