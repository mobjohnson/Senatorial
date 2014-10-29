console.log('senatorView connected');

var SenatorView = Backbone.View.extend({
  className: 'senator',

  events: {
    'click span.run': 'onRun'
  },

  initialize: function(){
    console.log('New Senator View');
    this.listenTo(this.model, 'change', this.render)

    var source = $('#senator-template').html();
    this.template = Handlebars.compile(source);

    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }

});