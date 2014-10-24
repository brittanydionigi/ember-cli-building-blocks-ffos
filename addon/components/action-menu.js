import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  attributeBindings: ['dataType:data-type', 'role'],
  dataType: 'action',
  role: 'dialog',
  setupActionMenu: function() {
  }.on('didInsertElement'),

  teardownActionMenu: function() {
    this.get('action-menu').destroy();
  }.on('willDestroyElement'),
});
