App.SenatorModel = Backbone.Model.extend({

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
        console.log('data', data);
        console.log('this', this);
        // this.
        // this.App.Collections.searchItems.models[0].state1Senator.attributes.sr_senator = 
       

        this.sr_senator = this.App.Collections.searchItems.models[0].state1Senator.attributes.objects[0].person.name;
        console.log(this.sr_senator);
        this.jr_senator = this.App.Collections.searchItems.models[1].state1Senator.attributes.objects[0].person.name;
        console.log(this.jr_senator);
      
    
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