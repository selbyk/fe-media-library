import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('artist', params.artist_id);
  },
  setupController: function(controller, artist) {
    controller.set('artist', artist);
    controller.set('albums', artist.get('albums'));
  }
});
