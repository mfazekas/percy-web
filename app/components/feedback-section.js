import Ember from 'ember';
import utils from '../lib/utils';

export default Ember.Component.extend({
  active: false,

  content: null,
  classNames: [
    'FeedbackSection',
  ],
  classNameBindings: [
    'active:FeedbackSection--active',
  ],
  actions: {
    toggle() {
      this.set('active', !this.get('active'));
    },
    send() {
      var self = this;
      var content = this.get('content') || '';
      if (content.trim() === '') {
        return;
      }

      Ember.$.ajax({
        type: 'POST',
        url: utils.buildApiUrl('feedback'),
        data: {content: content},
      }).then(
        function() {
          alert('Thanks for your feedback!');
          self.set('content', null);
          self.send('toggle');
        },
        function() {
          alert(
            'Sorry! Something went wrong submitting your feedback, ' +
            'please email hello@percy.io instead.'
          );
        }
      );
      // Prevent bubbling.
      return false;
    },
  },
});
