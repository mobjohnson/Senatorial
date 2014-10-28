console.log('search_item.js is connected');

// search_item model constructor based upon schema for defaults

var SearchItem = Backbone.Model.extend({
  defaults: {
    id: '',
    state1: '',
    state2: '',
    phrase: '',
    results1: 0,
    results2: 0,
  }
})

// search_item collection constructor
// includes models and url

var SearchItemCollection = Backbone.Collection.extend({
  model: SearchItem,
  url: '/search_items'
})

