App.SenatorModel = Backbone.Model.extend({

  url: function(){
    return "https://www.govtrack.us/api/v2/role?role_type=senator&state=" + this.state + "&current=true";   
  },

  // defaults for attributes from GovTrack.us
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
        // capture the five attributes
        // this.App.Collections.searchItems.models[0].state1Senator.attributes.sr_senator = 
       
        // ############# this shows all 8 senators in console log on last intialize#######
        // console.log('model[0]');
        // this.sr_senator = this.App.Collections.searchItems.models[0].state1Senator.attributes.objects[0].person.name;
        // console.log('senatorModel (#initialize/this.fetch/#success) this.sr_senator: ',this.sr_senator);
        // // following is empty on initial run through, but is there later?
        // this.jr_senator = this.App.Collections.searchItems.models[0].state1Senator.attributes.objects[1].person.name;
        // console.log('senatorModel (#initialize/this.fetch/#success) this.jr_senator: ', this.jr_senator);
    
        // this.sr_senator = this.App.Collections.searchItems.models[0].state2Senator.attributes.objects[0].person.name;
        // console.log('senatorModel (#initialize/this.fetch/#success) this.sr_senator: ',this.sr_senator);
        // // 
        // this.jr_senator = this.App.Collections.searchItems.models[0].state2Senator.attributes.objects[1].person.name;
        // console.log('senatorModel (#initialize/this.fetch/#success) this.jr_senator: ', this.jr_senator);
     

        // console.log('model[1]');   
        // this.sr_senator = this.App.Collections.searchItems.models[1].state1Senator.attributes.objects[0].person.name;
        // console.log('senatorModel (#initialize/this.fetch/#success) this.sr_senator: ',this.sr_senator);
        // // 
        // this.jr_senator = this.App.Collections.searchItems.models[1].state1Senator.attributes.objects[1].person.name;
        // console.log('senatorModel (#initialize/this.fetch/#success) this.jr_senator: ', this.jr_senator);
    
        // this.sr_senator = this.App.Collections.searchItems.models[1].state2Senator.attributes.objects[0].person.name;
        // console.log('senatorModel (#initialize/this.fetch/#success) this.sr_senator: ',this.sr_senator);
        // // 
        // this.jr_senator = this.App.Collections.searchItems.models[1].state2Senator.attributes.objects[1].person.name;
        // console.log('senatorModel (#initialize/this.fetch/#success) this.jr_senator: ', this.jr_senator);
// ############# ##################################################################
        
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




        // returns first state 'VA'
        // this.App.Collections.searchItems.models[0].attributes.state1

        // can set the sr_senator name for first senator, currently ''
        // this.App.Collections.searchItems.models[0].state1Senator.attributes.sr_senator

        // returns name of first senator
        // this.App.Collections.searchItems.models[0].state1Senator.attributes.objects[0].person.name

        // returns bioguideid of first senator 'C001056'
        // this.App.Collections.searchItems.models[0].state1Senator.attributes.objects[0].person.name
      },
    });
  },




});