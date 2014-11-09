console.log('router.js connected');

App.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'search_items/new': 'newSearchItem',
    'search_items/:id/edit': 'editSearchItem',
    'senators/:state1/:state2/:phrase': 'runSearch'
  },

  initialize: function(){
    // Instantiate searchItems collection. Does NOT fetch yet
    App.Collections.searchItems = new App.SearchItemCollection(App.TempData.searchItems);
    // Instantiate searchItem collection view, pass collection to it
    App.Views.searchItemListView = new App.SearchItemListView({collection: App.Collections.searchItems});
    // Instantiate searchItem form view, pass collection to it
    App.Views.searchItemFormView = new App.SearchItemFormView({collection: App.Collections.searchItems});
  },

  index: function(){
    // Hide form, show list
    $('#search-item-form').hide();
    $('#search-item-list').show();
  },

  newSearchItem: function(){
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
    $('#search-item-form').show();
  },
    
  runSearch: function(state1, state2, phrase){
    console.log(state1, state2, phrase);
    var activeSearch = new App.SearchItemModel({state1: state1, state2: state2, phrase: phrase});
    console.log(activeSearch);
 
  }

});