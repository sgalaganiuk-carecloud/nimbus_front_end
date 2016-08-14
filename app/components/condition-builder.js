import Ember from 'ember';

export default Ember.Component.extend({
  activeConditions: [],
  conditions: {
    appointment: ['startDate', 'endDate'],
    balance: ['operator', 'value']
  },
  conditionBuilderMap: {
    appointment: "appointment-condition-builder",
    balance: "balance-condition-builder"
  },
  activeConditionType: Ember.computed('condition.type', function() {
    let condition = this.get('condition');
    return condition.type;
  }),

  unset: Ember.computed('condition.type', function() {
    let condition = this.get('condition');
    return condition.type === 'unset';
  }),
  conditionTypes: Ember.computed('conditions', function() {
    return Object.keys(this.get('conditions'));
  }),
  conditionBuilderComponent: Ember.computed('condition.type', function() {
    let condition = this.get('condition');
    return this.get('conditionBuilderMap')[condition.get('type')];
  }),
  actions: {
    selectConditionType(conditionType) {
      let condition = this.get('condition');
      condition.set('type', conditionType);
      this.set('condition', condition);
    }
  }
});