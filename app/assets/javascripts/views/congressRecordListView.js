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
    console.log(' --- models in congressRecordListView', models)
    var senatorArray = [];
    // var senatorCounter = 0;
    // var senator1Array = [];
    // var senator2Array = [];
    // var senator3Array = [];
    // var senator4Array = [];
    // // Add the senator's name to the front of the array
    // if (this.model === undefined) {
    // } else {
    //   console.log('breakpoint');
    //   for (var i = 0; i < models.length; i++) {
    //     // console.log('+++ inside congressRecordListView for loop models[i]':, models[i])
    //     switch (i) {
    //       case 0:
    //       senator1Array.push(models[i].attributes.senator_name);
    //       break;
    //       case 1:
    //       senator2Array.push(models[i].attributes.senator_name);
    //       break;
    //       case 2:
    //       senator3Array.push(models[i].attributes.senator_name);
    //       break;
    //       case 3:
    //       senator4Array.push(models[i].attributes.senator_name);
    //       break;
    //       default:
    //       console.log('*** no match in for switch. i: ', i);
    //     }

    //     senatorCounter += 1      
    //   }
    // }
    senatorArray.push(this.collection.models[0].attributes.senator_name);
    // var recordArray = this.collection.models[0].attributes.senator_name

    console.log('*** senator1Array: ', senatorArray);
    // console.log('*** senator4Array: ', senator4Array);  


    var chart1 = c3.generate({
      bindto: '#chart1',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
        ]
      }
    });
    var chart2 = c3.generate({
      bindto: '#chart2',
      data: {
        columns: [
          [senatorArray, 30, 200, 100, 400, 150, 250],
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