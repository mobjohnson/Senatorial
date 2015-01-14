App.SenatorModel = Backbone.Model.extend({

  url: function(){
    return "https://www.govtrack.us/api/v2/role?role_type=senator&state=" + this.state + "&current=true";   
  },

  initialize: function(params){
    var self = this;
    this.params = params // added
    if (this.params != undefined) {
      this.phrase = params.phrase; // added
      this.state = params.state; // added
      this.parentObject = params.parentObject;

      if (this.phrase != undefined) {
        if (this.state != undefined) {
          console.log('senatorModel (#initialize) this.state', this.state);

          // do fetch

          this.fetch({
            success: function(data){
              console.log('Beginning of senatorModel initialize method');
              console.log('senatorModel (#initialize/this.fetch/#success) data:', data);
              console.log('senatorModel (#initialize/this.fetch/#success) this', this);
          
              console.log('senatorModel (this.data.changed.objects[0].person.name) this.sr_senator: ',this.sr_senator);
            
              if (data.changed.objects[0]) {
                // sets sr_senator 
                this.sr_senator = data.changed.objects[0].person.name;
                // sets sr_member_ref
                this.sr_member_ref = data.changed.objects[0].person.bioguideid;
              } else {
   
              }
              console.log('senatorModel (data.changed.objects[0].person.name) this.sr_senator: ',this.sr_senator);
              // sets jr_senator based upon data.changed
              if (data.changed.objects[1]) {
                this.jr_senator = data.changed.objects[1].person.name;
                // sets jr_member_ref
                this.jr_member_ref = data.changed.objects[1].person.bioguideid;
              } else {


              }
              console.log('senatorModel (data.changed.objects[1].person.name) this.jr_senator: ', this.jr_senator);

              console.log('senatorModel (data.changed.objects[0].person.bioguideid) this.sr_member_ref: ', this.sr_member_ref);       

              console.log('senatorModel (data.changed.objects[1].person.bioguideid) this.jr_member_ref: ', this.jr_member_ref);  
              // creating new congressRecordModel and adding attributes to this model for sr_senator
              this.Record1 = new App.CongressRecordModel({phrase: params.phrase, senator_name: this.sr_senator, bioguideid: this.sr_member_ref});
              self.parentObject.congressrecords.add(this.Record1);
              // creating new congressRecordModel and adding attributes to this model for jr_senator
              this.Record2 = new App.CongressRecordModel({phrase: params.phrase, senator_name: this.jr_senator, bioguideid: this.jr_member_ref});
              self.parentObject.congressrecords.add(this.Record2);

            },

          });
        }
      }
    }     
  },
});