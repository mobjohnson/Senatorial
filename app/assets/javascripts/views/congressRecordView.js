console.log('congressRecordView connected');

var CongressRecordView = Backbone.View.extend({
  className: 'congress-record',

  initialize: function(){
    console.log('New Congress Record View');
    this.listenTo(this.model, 'change', this.render)

    var source = $('#congress-record-template').html();
    this.template = Handlebars.compile(source);

    // var models = this.collection.models;
    // console.log(' models in congressRecordView', models)
    // var senatorArray = [];
    // var senator1Array = [];
    // var senator2Array = [];
    // var senator3Array = [];
    // var senator4Array = [];

    // var chart = c3.generate({
    //   bindto: '#chart',
    //   data: {
    //     columns: [
    //       ['data1', 30, 200, 100, 400, 150, 250],
    //       ['data2', 50, 20, 10, 40, 15, 25]
    //     ]

    //   }
    // });

    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }

});