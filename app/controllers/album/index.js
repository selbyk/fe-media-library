import Ember from 'ember';

export default Ember.Controller.extend({
  albumController: Ember.inject.controller('album'),
  commentSorting: ['updatedAt:desc'],
  comments: Ember.computed.sort('albumController.album.comments', 'commentSorting'),
  actions: {
    deleteComment(comment) {
      comment.destroyRecord();
    }
  }
});
