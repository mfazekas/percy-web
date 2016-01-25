import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  name: DS.attr(),
  build: DS.belongsTo('build'),
  screenshots: DS.hasMany('screenshot', {async: false}),
  startedProcessingAt: DS.attr('date'),
  finishedProcessingAt: DS.attr('date'),
  processingDurationSeconds: function() {
    var finished = this.get('finishedProcessingAt');
    var started = this.get('startedProcessingAt');
    var milliseconds = moment(finished).diff(started);
    return milliseconds / 1000;
  }.property('startedProcessingAt', 'finishedProcessingAt'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
});
