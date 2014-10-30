App.ConressRecordModel = Backbone.Model.extend({

  // interpolate phrase and bioguideid
  // http://capitolwords.org/api/1/dates.json?phrase=Iraq&entity_value=W000805&start_date= 2014-04-01&end_date=2014-10-01&granularity=month&apikey=3fdb489020354ae7b4e1a1bf75b4a279
  var phrase = // passed from html?
  var ref = // passed from html?
  url: "http://capitolwords.org/api/1/dates.json?phrase=" + (phrase) + "&entity_value=" (ref) + "&start_date= 2014-04-01&end_date=2014-10-01&granularity=month&apikey=3fdb489020354ae7b4e1a1bf75b4a279"

  defaults:{
    recordCount: 0,
    recordMonth: ''
  },

  initialize: function(){
    console.log('New Conressional Record Model')
  },


  getCongressRecords: function(state1, phrase){
    // Put state and phrase into url above?

    // need to add congressRecord bioguideid
    
    var CongRecordsArray = 
    // Parse data
    // save gio record id

  }


});