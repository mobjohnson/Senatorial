console.log('senatorListView.js is connected');

App.SenatorListView = Backbone.View.extend({
  el: '#senator-list',

  // events: {
  //   'click span.addsenator':'showForm'
  // },

  initialize: function(){
    console.log('New Senator List View');
    // this.listenTo(this.collection, 'add', this.addOne)
    // this.listenTo(this.collection, 'reset', this.addAll)

    this.addAll();
  },

  addOne: function(senator){
    var senatorView = new SenatorView({ model: senator});
    senatorView.$el.insertAfter(this.$('span.addsenator'));
  },

  addAll: function(){
    this.collection.each(function(senator){
    this.addOne(senator);
    },this)
  }

  // showForm: function() {
  //   App.router.navigate(senator)
  // }

});