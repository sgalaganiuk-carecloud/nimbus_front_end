import Ember from 'ember';

export function capitalize(params/*, hash*/) {
  if (params[0]) {
    return params[0].charAt(0).toUpperCase() + params[0].slice(1);
  }
}

export default Ember.Helper.helper(capitalize);
