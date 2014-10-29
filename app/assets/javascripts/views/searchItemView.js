console.log('searchItemView connected');

var SearchItemView = Backbone.View.extend({
  className: 'search-item',

  events: {
    'click span.destroy': 'onDestroy',
    'click span.edit': 'onEdit'
    // we are not doing onRun because we are using a deep link
    // 'click span.run': 'onRun'
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
    App.router.navigate('set_items/' + this.model.id + '/edit', { trigger: true});
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

  //  We are not doing onRun because we are doing a deep link 

  //  onRun: function(){
  //   console.log('I am here')
  //   // base call
  //   // 'https://www.govtrack.us/api/v2/role?role_type=senator&state=VA&current=true'
  //   var response = new
  //   App.router.navigate('https://www.govtrack.us/api/v2/role?role_type=senator&state=' + this.model.id + '/edit', { trigger: true});
  //   // 
  //   .fetch

  // }
});