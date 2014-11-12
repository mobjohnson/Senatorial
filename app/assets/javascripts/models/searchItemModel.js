App.SearchItemModel = Backbone.Model.extend({
  initialize: function(params){
    console.log('searchItemModel (#initialize) params:', params);
    // add state and phrase to params from router call, used to instantiate senator model
    // this.state1 = params.state1;
    // this.state2 = params.state2;
    // this.phrase = params.phrase;
    // create new senatorModel and adding attributes to this model for state1Senator
    if (params.state1){
      this.state1Senator = new App.SenatorModel({phrase: params.phrase, state: params.state1});
    }
    // creating new senatorModel and adding attributes to this model for state1Senator
    if (params.state2){
      this.state2Senator = new App.SenatorModel({phrase: params.phrase, state: params.state2});       
    }



  },


});