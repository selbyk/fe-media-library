import Ember from 'ember';

export default Ember.Controller.extend({
  newComment: {
    author: '',
    message: ''
      //album: currentAlbumObject
  },
  actions: {
    saveComment() {
      let _this = this;
      let author = this.get('newComment.author').trim();
      let message = this.get('newComment.message').trim();
      let album = this.get('album');
      if (Ember.isEmpty(author) || Ember.isEmpty(message)) {
        alert('Author and message must be filled out before a comment may be saved!');
      } else {
        let comment = this.store.createRecord('comment', {
          author,
          message,
          album
        });
        comment.save().then(newComment => {
          album.get('comments').pushObject(newComment);
          album.save().then(updatedAlbum => {
            _this.set('newComment', {
              author: '',
              message: ''
            });
            alert(`Album ${updatedAlbum.get('name')} saved successfully!`);
          }).catch((err) => {
            alert('Failed to update album with new comment: ', err);
            newComment.destroyRecord();
          });
        }).catch((err) => {
          alert('Failed to save comment: ', err);
        });
      }
    }
  }
});
