console.log('search_item_profile_view.js connected');

// create a profile view of each search_item_profile_view
// build a template from the html

var SearchItemProfileView = Backbone.View.extend({
  tagName: 'div',
  className: 'profile',

  initialize: function(){
    var source = $('#search-item-profile-view-template').html();
    this.template = Handlebars.compile(source);
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function(){
    var html = this.template( this.model.toJSON() );
    return this.$el.html(html);
  }
  
})