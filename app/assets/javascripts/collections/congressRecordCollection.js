App.CongressRecordCollection = Backbone.Collection.extend({

  model: App.CongressRecordModel,
  url: '/congressRecords',
  parse: function(data){
    return data.objects;
  }

  initialize: function(){
    console.log('New Congress Record Collection');
  }

  var senators = new App.CongressRecordCollection();

  senators.fetch().then(function(){
    // If senator_rank = senior
    // person.name
    // person.bioguideid
    // 
    console.log('inside fetch');
    console.log(this);

  });

});