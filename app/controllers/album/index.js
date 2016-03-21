import Ember from 'ember';

export default Ember.Controller.extend({
  albumController: Ember.inject.controller('album'),
  commentSorting: ['updatedAt:desc'],
  comments: Ember.computed.sort('albumController.album.comments', 'commentSorting'),
  actions: {
    deleteComment(comment) {
      let album = this.get('albumController.album');
      comment.destroyRecord().then(() => {
        album.save().then(() => {
          alert('Comment deleted successfully');
        }).catch(err => {
          alert('Failed to update album: ', err);
        });
      }).catch(err => {
        alert('Failed to delete comment: ', err);
      });
    }
  }
});
