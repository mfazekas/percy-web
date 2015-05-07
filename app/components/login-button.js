import Ember from 'ember';
import utils from '../lib/utils';

export default Ember.Component.extend({
  classes: null,

  tagName: 'a',
  href: '#',
  classNames: [
    'LoginButton',
    'Button',
    'Button--primary',
    'Button--onDark',
    'Button--withLeftIcon',
  ],
  attributeBindings: ['href'],
  classNameBindings: [
    'classes',
  ],
  click: function() {
    this.send('login');
  },
  actions: {
    login: function() {
      this.get('session').authenticate('authenticator:custom', {doRedirect: true});
    }
  },
});
