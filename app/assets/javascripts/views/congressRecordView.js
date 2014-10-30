console.log('congressRecordView connected');

var congressRecordView = Backbone.View.extend({
  className: 'congressrecord',

  // events: {
  //   'click span.run': 'onRun'
  // },

  initialize: function(){
    console.log('New Congress Record View');
    this.listenTo(this.model, 'change', this.render)

    var source = $('#congress-record-template').html();
    this.template = Handlebars.compile(source);

    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }

});