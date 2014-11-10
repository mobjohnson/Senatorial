App.CongressRecordModel = Backbone.Model.extend({

  // API url for Capital Words
  // Sample: http://capitolwords.org/api/1/dates.json?phrase=Iraq&entity_value=W000805&start_date= 2014-04-01&end_date=2014-10-01&granularity=month&apikey=3fdb489020354ae7b4e1a1bf75b4a279
  url: function(){
    return "http://capitolwords.org/api/1/dates.json?phrase=" + this.phrase + "&entity_value=" + this.bioguideid + "&start_date= 2014-04-01&end_date=2014-11-01&granularity=month&apikey=3fdb489020354ae7b4e1a1bf75b4a279"
  },

  // Defaults for name and bioguideid for Capital Words API, and placeholder for array return
  defaults:{
    phrase: '',
    senator_name: '',
    bioguideid: '',
    recordCount1: 0,
    recordCount2: 0,
    recordCount3: 0,
    recordCount4: 0,
    recordCount5: 0,  
    recordCount6: 0  
  },

  initialize: function(params){

    this.phrase = params.phrase;
    this.senator_name = params.senator_name;
    this.bioguideid = params.bioguideid;
    console.log('congressModel (#initialize) this.phrase: ', this.phrase);   
    console.log('congressModel (#initialize) this.senator_name: ', this.senator_name);
    console.log('congressModel (#initialize) this.bioguideid: ', this.bioguideid);
    // do fetch
    this.fetch({
      success: function(data){
        console.log('Beginning of initialize method');
        console.log('congressRecordModel (#initialize/this.fetch/#success data:', data);
        console.log('congressRecordModel (#initiale/this.fetch/#success this:', this);










      },

    });

  },

});