console.log('searchItemView connected');

var SearchItemView = Backbone.View.extend({
  className: 'search-item',

  events: {
    'click span.destroy': 'onDestroy',
    'click span.edit': 'inEdit'
  },

  initialize: function(){
    console.log('New Search Item View');
    this.listenTo(this.model, 'change', this.render)

    var source = $('#search-item-template').html();
    this.template = Handlebars.compile(source);

    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  onEdit: function(){
    Router.navigate('set_items/' + this.model.id + '/edit', { trigger: true});
  },

  onDestroy: function(){
    var self = this;

    if (confirm('Are you sure?')){
      this.model.destroy({
        success: function(model, response, options){
          self.remove();
        },
        error: function(model, response, options){
          alert("Your Search Item could not be destroyed.");
        }
      });
    }
  }


});