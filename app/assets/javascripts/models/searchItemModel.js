App.SearchItemModel = Backbone.Model.extend({
  initialize: function(params){
    console.log('search item data', params);
    this.state1Senator = new App.SenatorModel({state: params.state1});// adding attributes to this model
    this.state2Senator = new App.SenatorModel({state: params.state2});
  },


});