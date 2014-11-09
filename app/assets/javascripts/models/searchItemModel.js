App.SearchItemModel = Backbone.Model.extend({
  initialize: function(params){
    console.log('search item data', params);
    // add state and phrase to params from router call, used to instantiate senator model
    this.state1 = params.state1;
    this.state2 = params.state2;
    this.phrase = params.phrase;
    // create new SenatorModel and adding attributes to this model for state1Senator
    this.state1Senator = new App.SenatorModel({state: params.state1});
    // creating new SenatorModel and adding attributes to this model for state1Senato2
    this.state2Senator = new App.SenatorModel({state: params.state2}); 
  },


});