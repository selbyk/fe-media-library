import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('application/index', {path: '/'});
  this.route('artist', { path: '/artist/:artist_id' });
});

export default Router;
