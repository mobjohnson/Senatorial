App.SenatorCollection = Backbone.Collection.extend({

  model: App.SenatorModel,
  url: '/senators',
  // parse: function(data){
  //   return data.objects;
  // },

  initialize: function(){
    console.log('New Senator Collection');
  }


});