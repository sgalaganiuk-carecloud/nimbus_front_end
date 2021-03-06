import Ember from 'ember';

export default Ember.Component.extend({
  // init() {
  //   this._super(...arguments);
  //   let condition = this.get('condition');
  //   if (!this.get('condition').get('operator')) {
  //     // condition.setProperties({ operator: '>', value: 0 });
  //   }
  // },
  balanceOperators: ['<', '>', '=', '>=', '<='],

  value: Ember.computed('condition.value', {
    get() {
      return this.get('condition').get('value') || 0;
    },

    set(key, value) {
      this.get('condition').set('value', value);
    }
  }),

  actions: {
    setOperator(operator) {
      let condition = this.get('condition');
      this.propertyWillChange('condition');
      condition.set('operator', operator);
      this.set('condition', condition);
      this.propertyDidChange('condition');
    }
  }
});
