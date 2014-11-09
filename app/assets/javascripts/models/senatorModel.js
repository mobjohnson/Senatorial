App.SenatorModel = Backbone.Model.extend({

  url: function(){
    return "https://www.govtrack.us/api/v2/role?role_type=senator&state=" + this.state + "&current=true";   
  },

  // defaults for attributes for state, name and bioguideid from GovTrack.us
  defaults:{
    state: '',
    sr_senator: '',
    jr_senator: '',
    sr_member_ref: '',
    jr_member_ref: ''
  },

  initialize: function(params){
    this.state = params.state;
    console.log('senatorModel (#initialize) this.state', this.state);
    // do fetch
    this.fetch({
      success: function(data){
        console.log('Beginning of initialize method');
        console.log('senatorModel (#initialize/this.fetch/#success) data:', data);
        console.log('senatorModel (#initialize/this.fetch/#success) this', this);
    
        // console.log('senatorModel (this.data.changed.objects[0].person.name) this.sr_senator: ',this.sr_senator);
        // sets sr_senator based upon data.changed
        this.sr_senator = data.changed.objects[0].person.name;
        console.log('senatorModel (data.changed.objects[0].person.name) this.sr_senator: ',this.sr_senator);
        // sets jr_senator based upon data.changed
        this.jr_senator = data.changed.objects[1].person.name;
        console.log('senatorModel (data.changed.objects[1].person.name) this.jr_senator: ', this.jr_senator);
        // sets sr_member_ref
        this.sr_member_ref = data.changed.objects[0].person.bioguideid;
        console.log('senatorModel (data.changed.objects[0].person.bioguideid) this.sr_member_ref: ', this.sr_member_ref);       
       // sets jr_member_ref
        this.jr_member_ref = data.changed.objects[1].person.bioguideid;
        console.log('senatorModel (data.changed.objects[1].person.bioguideid) this.jr_member_ref: ', this.jr_member_ref);  
        // creating new congressRecordModel and adding sttributes to this model for sr_senator
        this.RecordArray1 = new App.CongressRecordModel({phrase: params.phrase, name: sr_senator, bioguideid: sr_member_ref});
        // creating new congressRecordModel and adding sttributes to this model for jr_senator
        this.RecordArray1 = new App.CongressRecordModel({phrase: params.phrase, name: jr_senator, bioguideid: jr_member_ref});
      },

    });

    
  },




});