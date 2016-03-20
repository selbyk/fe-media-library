import Ember from 'ember';

export default Ember.Controller.extend({
  // setup our query params
  init() {
    this._super(...arguments);
    this.set('totalPages', Ember.computed('albums.length', 'perPage', () => {
      return Math.ceil(this.get('albums.length') / this.get('perPage'));
    }));
    this.set('pagedAlbums', Ember.computed('albums', 'currentPage', 'perPage', () => {
      console.log('your fucking gay');
      let startIndex = (this.get('currentPage') - 1) * this.get('perPage');
      let endIndex = startIndex + this.get('perPage');
      return this.get('albums').slice(startIndex, endIndex);
    }));
  },
  queryParams: ['currentPage', 'perPage'],
  currentPage: 1,
  perPage: 2,
  albums: []
});
