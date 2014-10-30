App.CongressRecordCollection = Backbone.Collection.extend({

  model: App.CongressRecordModel,
  url: '/congressRecords',
  parse: function(data){
    return data.objects;
  }

  initialize: function(){
    console.log('New Congress Record Collection');
  }

  var congressRecords = new App.CongressRecordCollection();

  congressRecords.fetch().then(function(){
    // If senator_rank = senior
    // person.name
    // person.bioguideid
    // 
    console.log('inside fetch');
    console.log(this);

  });

});