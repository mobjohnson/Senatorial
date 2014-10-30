App.SearchItemModel = Backbone.Model.extend({
  initialize: function(params){
    console.log('search item data', params);
    this.state1 = params.state1;
    this.state2 = params.state2;
    this.phrase = params.phrase;
    this.state1Senator = new App.SenatorModel({state: params.state1});// adding attributes to this model
    this.state2Senator = new App.SenatorModel({state: params.state2});
  },


});