import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    controller.set('artist', model);
  },
  model(params){
    return this.store.findRecord('artist', params.artist_id);
  }
});
