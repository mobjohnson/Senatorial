App.CongressRecordCollection = Backbone.Collection.extend({

  model: App.CongressRecordModel,
  url: '/congress_records',
  parse: function(data){
    return data.objects;
  },

  initialize: function(){
    console.log('New Congress Record Collection');
  }

});