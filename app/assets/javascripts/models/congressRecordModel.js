App.CongressRecordModel = Backbone.Model.extend({

  defaults:{
    name: '',
    bioguideid: '',
    recordCount1: 0,
    recordCount2: 0,
    recordCount3: 0,
    recordCount4: 0,
    recordCount5: 0,  
    recordCount6: 0  
  },

  initialize: function(){
    console.log('New Conressional Record Model')
  },


  getCongressRecords: function(state1, phrase){
    // Put state and phrase into url above?

    // need to add congressRecord bioguideid
    
    // var CongRecordsArray = 
    // Parse data
    // save gio record id

  }
});