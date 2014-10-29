console.log('router.js connected');

var Router = Backbone.Router.extend({
  routes: {
    'search_items'    : 'listSearchItems',
    'search_items/:id': 'displaySearchItemDetail',
    '*default'        : 'listSearchItems',
    // second round of items
    // '': 'index',
    // 'search_items/new': 'newSearchItem',
    // 'search_items/:id/edit': 'editSearchItem'
  },

  clearView: function(){
    if (this.view){
      this.view.remove();
      this.view = null;
    }
  },

  listSearchItems: function(){
    console.log('listSearchItems firing');
    this.clearView();
    // instantiate list view with collection
    this.view = new SearchItemListView({ collection: searchItemCollection });
    //  add this view to the correct place on the DOM
    this.view.$el.appendTo('.content-wrapper');

  },

  displaySearchItemDetail: function(id){
    this.clearView();
    // find appropriate search_item from within the collection
    var searchItem = searchItemCollection.find(function(searchItem){
      return searchItem.get('id') === parseInt(id);
    });
    // get a specific model from the collection
    // instantiate the model view with its appropriate model that we just found
    this.view = new searchItemProfileView({ model: searchItem });
    //  add the view to the appropriate place in the DOM
    this.view.$el.appendTo('.content-wrapper');
  }

});