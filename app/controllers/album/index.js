import Ember from 'ember';

export default Ember.Controller.extend({
  albumController: Ember.inject.controller('album'),
  commentSorting: ['updatedAt:desc'],
  comments: Ember.computed.sort('albumController.album.comments', 'commentSorting'),
  /*
  A little debug action
   actions: {
    alertVars() {
      this.get('album').get('comments').then((comments) => {
        alert(comments.length);
      });
      alert(this.get('commentsSorted').toArray().length);
      alert(this.get('albumController.album.comments').toArray().length);
      alert(this.get('albumController.comments').toArray().length);
      alert(this.get('comments').toArray().length);
    }
  }*/
});
