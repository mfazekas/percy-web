import Ember from 'ember';

export default Ember.Service.extend({
  PLAN_IDS: [
    'free',
    'v1-small',
    'v1-medium',
    'v1-large',
    'v1-pro',
    'v1-premium',
    'v1-premium-xl',
  ],
  PLANS: [
    {
      id: 'free',
      name: 'Free',
      price: 0,
      numDiffs: 500,
      numWorkersTitle: '2 parallel workers',
      numUsersTitle: 'Unlimited users',
      historyLimitTitle: '7 day history',
    },
    {
      id: 'v1-small',
      name: 'Small',
      price: 49,
      numDiffs: 5000,
      numWorkersTitle: '5 parallel workers',
      numUsersTitle: 'Unlimited users',
      historyLimitTitle: '14 day history',
    },
    {
      id: 'v1-medium',
      name: 'Medium',
      price: 149,
      numDiffs: 25000,
      numWorkersTitle: '10 parallel workers',
      numUsersTitle: 'Unlimited users',
      historyLimitTitle: '30 day history',
    },
    {
      id: 'v1-large',
      name: 'Large',
      price: 299,
      numDiffs: 50000,
      numWorkersTitle: '15 parallel workers',
      numUsersTitle: 'Unlimited users',
      historyLimitTitle: '60 day history',
    },
    {
      id: 'v1-pro',
      name: 'Pro',
      price: 499,
      numDiffs: 100000,
      numWorkersTitle: '20 parallel workers',
      numUsersTitle: 'Unlimited users',
      historyLimitTitle: '90 day history',
    },
    {
      id: 'v1-premium',
      name: 'Premium',
      price: 749,
      numDiffs: 150000,
      numWorkersTitle: '25 parallel workers',
      numUsersTitle: 'Unlimited users',
      historyLimitTitle: '90 day history',
    },
    {
      id: 'v1-premium-xl',
      name: 'Premium XL',
      price: 990,
      numDiffs: 200000,
      numWorkersTitle: '30 parallel workers',
      numUsersTitle: 'Unlimited users',
      historyLimitTitle: '90 day history',
    },
  ],
});
