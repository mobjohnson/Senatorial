App.SenatorModel = Backbone.Model.extend({

  // interpolate state1 on next line????
  // var urlState = :state1 // or this.state1?

  url: function(){
    return "https://www.govtrack.us/api/v2/role?role_type=senator&state=" + this.state + "&current=true";   
  },

  defaults:{
    state: '',
    sr_senator: '',
    jr_senator: '',
    sr_member_ref: '',
    jr_member_ref: ''
  },

  initialize: function(params){
    this.state = params.state;
    console.log('state', this.state);
    // do fetch
    this.fetch({
      success: function(data){
        console.log(data);
      },
    });
  },

  // getSenator: function(state1, phrase){
  //   // or getSenators???
  //   // Put state into url & fetch
  //   var senatorArray = 
  //   // https://www.govtrack.us/api/v2/role?role_type=senator&state=VA&current=true

  //   // Parse data
  //   // Process data
  //   // update model?
  //   getCongRecords(state1, phrase);
  // },

  // getCongRecords: function(state1, phrase){
  //   // Put state and phrase into url & fetch
  //   var CongRecordsArray = 
  //   // Parse data
  //   // save gio record id

  // }


});