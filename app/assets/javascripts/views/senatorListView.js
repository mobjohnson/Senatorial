console.log('senatorListView.js is connected');

App.SenatorListView = Backbone.View.extend({
  el: '#senator-list',

  initialize: function(){
    console.log('New Senator List View');
    // this.collection.fetch();
    this.addAll();
  },

  addOne: function(senator){
    var senatorView = new SenatorView({ model: senator});
    senatorView.$el.insertAfter(this.$('span.addsenator'));
  },

  addAll: function(){
    this.collection.each(function(senator){
    this.addOne(senator);
    }, this)
  }

});