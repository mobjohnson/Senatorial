console.log('congressRecordListView.js is connected');

App.CongressRecordListView = Backbone.View.extend({
  el: '#congress-record-list',

  initialize: function(){
    console.log('New Congress Record View');
    this.addAll();
  },

  addOne: function(congressRecord){
    var congressRecordView = new CongressRecordView({ model: congressRecord});
    congressRecordView.$el.insertAfter(this.$('span.addcongressrecord'));
  },

  addAll: function(){
    this.collection.each(function(congressRecord){
    this.addOne(congressRecord);
    }, this)
  },

});