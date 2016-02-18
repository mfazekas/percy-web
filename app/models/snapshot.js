import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  name: DS.attr(),
  build: DS.belongsTo('build'),
  screenshots: DS.hasMany('screenshot', {async: false}),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
});
