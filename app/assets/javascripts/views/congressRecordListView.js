console.log('congressRecordListView.js is connected');

App.CongressRecordListView = Backbone.View.extend({
  el: '#scongress-record-list',

  // events: {
  //   'click span.add':'showForm'
  // },

  initialize: function(){
    console.log('New Congress Record View');
    this.listenTo(this.collection, 'add', this.addOne)
    this.listenTo(this.collection, 'reset', this.addAll)

    this.addAll();
  },

  addOne: function(congressRecord){
    var congressRecordView = new CongressRecordView({ model: congressRecord});
    congressRecordView.$el.insertAfter(this.$('span.addcongressrecord'));
  },

  addAll: function(){
    this.collection.each(function(congressRecord){
    this.addOne(congressRecord);
    },this)
  },

});