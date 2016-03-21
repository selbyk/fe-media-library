import Ember from 'ember';

export default Ember.Controller.extend({
  newComment: {
    author: '',
    message: ''
      //album: currentAlbumObject
  },
  actions: {
    saveComment() {
      let author = this.get('newComment.author').trim();
      let message = this.get('newComment.message').trim();
      if (Ember.isEmpty(author) || Ember.isEmpty(message)) {
        alert('Author and message must be filled out before a comment may be saved!');
      } else {
        let comment = this.store.createRecord('comment', {
          author,
          message,
          album: this.get('album')
        });
        comment.save().then(() => this.set('newComment', {
          author: '',
          message: ''
        }));
      }
    }
  }
});
