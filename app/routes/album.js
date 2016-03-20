import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    controller.set('album', model);
    controller.set('comments', model.get('comments'));
  },
  model(params){
    return this.store.find('album', params.album_id);
  }
});
