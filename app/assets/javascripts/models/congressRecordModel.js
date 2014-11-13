App.CongressRecordModel = Backbone.Model.extend({

  url: function(){
    return "http://capitolwords.org/api/1/dates.json?phrase=" + this.phrase + "&entity_value=" + this.bioguideid + "&start_date= 2014-04-01&end_date=2014-11-01&granularity=month&apikey=3fdb489020354ae7b4e1a1bf75b4a279"
  },

  // Defaults for name and bioguideid for Capital Words API, and placeholder for array return
  defaults:{
    phrase: '',
    senator_name: '',
    bioguideid: '',
    recordCounts: [] 
  },

  initialize: function(params){

    this.phrase = params.phrase;
    this.senator_name = params.senator_name;
    this.bioguideid = params.bioguideid;
    console.log('congressRecordModel (#initialize) this.phrase: ', this.phrase);   
    console.log('congressRecordModel (#initialize) this.senator_name: ', this.senator_name);
    console.log('congressModel (#initialize) this.bioguideid: ', this.bioguideid);
    console.log('congressRecordModel (#initialize) this:', this);
    // do fetch
    if (this.phrase){
      this.fetch({
        success: function(data){
        console.log('Beginning of initialize method');
        console.log('congressRecordModel (#initialize/this.fetch/#success data:', data);
        console.log('congressRecordModel (#initialize/this.fetch/#success this:', this);
        // set recordCounts to array of Congress Records matching criteria
        this.recordCounts = data.attributes.results
        console.log('congressRecordModel (initialize/this.fetch/#success data.attributes.results: ', this.recordCounts);
        }
      });
    }
                                
    console.log('post fetch congressRecordModel (#initialize) this:', this);

  }

});