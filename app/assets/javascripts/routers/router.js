console.log('router.js connected');

App.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'search_items/new': 'newSearchItem',
    'search_items/:id/edit': 'editSearchItem'
  },

  initialize: function(){
    // Instantiate searchItems collection. Does NOT fetch yet
    App.Collections.searchItems = new App.SearchItemCollection(App.TempData.searchItems);
    // Instantiate searchItem collection view, pass collection to it
    App.Views.searchItemsListView = new App.SearchItemListView({collection: App.Collections.searchItems});
    // Instantiate searchItem form view, pass collection to it
    App.Views.searchItemFormView = new App.SearchItemFormView({collection: App.Collections.searchItems});
  },

  index: function(){
    // Fetch searchItem from server
    // App.Collections.setItems.fetch({reset: true}); ////////////?????
    // Hide form, show list
    $('#search-item-form').hide();
    $('#search-item-list').show();
  },

  newSearchItem: function(){
    // Fetch grumbles from server
    // App.Collections.setItems.fetch({reset: true}); ////////////?????

    // Unset the model on formView if one exists
    App.Views.searchItemFormView.model = null;

    // Re-render form view without model
    App.Views.searchItemFormView.render();

    // Fade in form
    $('#search-item-form').fadeIn(500);

  },

  editSearchItem: function(searchItemId){
    // Hide list
    $('#search-item-list').hide();

    // Find the specific searchItem model to edit
    var searchItem = App.Collections.searchItems.get(searchItemId);

    // Set the model property on form view
    App.Views.searchItemFormView.model = searchItem;

    // Re-render form view with model data
    App.Views.searchItemFormView.render();

    // Show form
    $('#search-item').show();
  }



// #######################


  // listSearchItems: function(){
  //   console.log('listSearchItems firing');
  //   this.clearView();
  //   // instantiate list view with collection
  //   this.view = new SearchItemListView({ collection: searchItemCollection });
  //   //  add this view to the correct place on the DOM
  //   this.view.$el.appendTo('.content-wrapper');

  // },

  // displaySearchItemDetail: function(id){
  //   this.clearView();
  //   // find appropriate search_item from within the collection
  //   var searchItem = searchItemCollection.find(function(searchItem){
  //     return searchItem.get('id') === parseInt(id);
  //   });
  //   // get a specific model from the collection
  //   // instantiate the model view with its appropriate model that we just found
  //   this.view = new searchItemProfileView({ model: searchItem });
  //   //  add the view to the appropriate place in the DOM
  //   this.view.$el.appendTo('.content-wrapper');
  // },

  // newSearchItem: function(){

  // },

  

});