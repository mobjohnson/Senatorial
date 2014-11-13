console.log('congressRecordListView.js is connected');

App.CongressRecordListView = Backbone.View.extend({
  el: '#congress-record-list',

  initialize: function(){
    console.log('New Congress Record View');
    this.listenTo(this.collection, 'add', this.addOne);
    this.listenTo(this.collection, 'reset', this.addAll);
    console.log('line 10 congressRecordListView#initialize this: ', this);
    this.addAll();
  },

  addOne: function(congressRecord, el){
    console.log(' --- inside congressRecordListView#addOne this:', this);
    var congressRecordView = new CongressRecordView({ model: congressRecord});
    congressRecordView.$el.insertAfter(this.$('span.add-congress-record'));
    var models = this.collection.models;
    // console.log(' --- models in congressRecordListView', models)
    this.senatorArray = [];
 
    // Add senator name to array
    this.senatorArray.push(this.collection.models[0].attributes.senator_name);
    // Add data to array

    // console.log('*** senatorArray: ', this.senatorArray);
 
    // static linechart with hard coded values 
    // makes me happy to see it
    var chart1 = c3.generate({
      bindto: '#chart1',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
        ]
      }
    });

    // dynamic chart
    var chart2 = c3.generate({
      bindto: '#chart2',
      data: {
        columns: [
          [this.senatorArray, 30, 200, 100, 400, 150, 250],
        ]
      }
    });

  },

  addAll: function(){
    console.log('inside congressRecordListView#addAll this:', this);
    this.collection.each(function(congressRecord){
      this.addOne(congressRecord);
    },this);
  },

});