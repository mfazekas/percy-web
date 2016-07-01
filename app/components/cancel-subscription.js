import Ember from 'ember';
import SubscriptionHelpers from '../lib/subscription-helpers';

export default Ember.Component.extend({
  tagName: 'button',
  classes: null,

  classNames: [
    'Button',
  ],
  classNameBindings: [
    'classes',
  ],
  click() {
    if (confirm('Are you sure you want to cancel?\n\nWe want to help if we can, just email us at hello@percy.io.')) {
      SubscriptionHelpers.changeSubscription('free').then(
        function() {
          // Refresh after canceling plan.
          location.href = '/account#success';
          location.reload();  // If we are already on the account page.
        },
        function() {
          alert(
            'A Stripe error occurred! Sorry about that, please ' +
            'contact us at hello@percy.io and we will make sure you are set up correctly.'
          );
          location.reload();
        }
      );
    }
  },
});
