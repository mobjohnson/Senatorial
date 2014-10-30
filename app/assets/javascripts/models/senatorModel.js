App.SenatorModel = Backbone.Model.extend({

  // interpolate state1 on next line????
  var urlState = :state1 // or this.state1?
  url: "https://www.govtrack.us/api/v2/role?role_type=senator&state=" + urlState "&current=true",

  defaults:{
    sr_senator: '',
    jr_senator: '',
    sr_member_ref: '',
    jr_member_ref: '',
    sr_member_records: '',
    jr_member_records: ''
  },

  initialize: function(){
    console.log('New Senator Model')
  },

  getSenator: function(state1, phrase){
    // or getSenators???
    // Put state into url & fetch
    var senatorArray = 
    // https://www.govtrack.us/api/v2/role?role_type=senator&state=VA&current=true

    // Parse data
    // Process data
    // update model?
    getCongRecords(state1, phrase);
  },

  getCongRecords: function(state1, phrase){
    // Put state and phrase into url & fetch
    var CongRecordsArray = 
    // Parse data
    // save gio record id

  }


});