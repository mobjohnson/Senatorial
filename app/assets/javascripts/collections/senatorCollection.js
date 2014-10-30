App.SenatorCollection = Backbone.Collection.extend({

  model: App.SenatorModel,
  url: '/senators',
  parse: function(data){
    return data.objects;
  }

  initialize: function(){
    console.log('New Senator Collection');
  }

  var senators = new App.SenatorCollection();

  senators.fetch().then(function(){
    // If senator_rank = senior
    // person.name
    // person.bioguideid
    // 
    console.log('inside fetch');
    console.log(this);

  });

});