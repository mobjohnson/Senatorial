console.log('congressRecordListView.js is connected');

App.CongressRecordListView = Backbone.View.extend({
  el: '#congress-record-list',

  initialize: function(){
    console.log('New Congress Record View');
    this.listenTo(this.collection, 'add', this.addOne);
    this.listenTo(this.collection, 'reset', this.addAll);
    console.log('congressRecordListView#initialize this: ', this);
    this.addAll();

    // Add congressRecord model to congressRecordCollection

    // this.collection.create(this, { 
    //   success: function(){
    //     console.log('collection congressRecord appended');
    //   }
    // });

    // this.test = this.collection // added
    // if (this.test === undefined) {
    //   } else {
    //   this.collection.create(this);
    // }


  },

  addOne: function(congressRecord){ // removed el
    console.log('inside congressRecordListView#addOne this:', this);
    var congressRecordView = new CongressRecordView({ model: congressRecord});
    congressRecordView.$el.insertAfter(this.$('span.add-congress-record'));
    var models = this.collection.models;

    this.senatorArray = [];
 
    console.log('break congressRecordListView line 30');

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