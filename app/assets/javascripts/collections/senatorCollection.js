App.SenatorCollection = Backbone.Collection.extend({

  model: App.SenatorModel,
  url: '/senators',
  // url: function(){
  //   return "https://www.govtrack.us/api/v2/role?role_type=senator&state=" + this.state + "&current=true";   
  // },
  // parse: function(data){
  //   return data.objects;
  // },

  initialize: function(){
    console.log('New Senator Collection');
  }


});