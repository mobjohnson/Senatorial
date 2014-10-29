console.log('search_item_list_view.js is connected');

var SearchItemListView = Backbone.View.extend({
  el: '#seach-item-list',

  events: {
    'click span.add':'showForm'
  },

  initialize: function(){
    console.log('New Search Item View');
    this.listenTo(this.collection, 'add', this.addOne)
    this.listenTo(this.collection, 'reset', this.addAll)

    this.addAll();
  },

  addOne: function(searchItem){
    var searchItemView = new SearchItemView({ model: searchItem});
    searchItemView.$el.insertAfter(this.$('span.add'));
  },

  addAll: function(){
    this.collection.each(function(searchItem){
    this.addOne(searchItem);
    },this)
  },

  showForm: function() {
    Router.navigate('search_items/new', { trigger: true});
  }

});