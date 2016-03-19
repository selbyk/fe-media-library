import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    controller.set('album', model);
  },
  model(params){
    return this.store.findRecord('album', params.album_id);
  }
});
