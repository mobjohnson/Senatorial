console.log('list_view.js connected')

// create a searchItem list list_view
// build template from html

var SearchItemListView = Backbone.View.extend({
  tagName: 'ul',

  initialize: function(){
    var source = $('#search-item-list-item-template').html();
    this.template = Handlebars.compile(source);
    // listen to the collection so it rerenders page if anything fetches
    this.listenTo(this.collection, 'sync add remove', this.render);
    this.render();
  },

  render: function(){
    var html = this.template({ collection: this.collection.toJSON()});
    return this.$el.html(html);
  }

});