// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require handlebars
//= require backbone
//= require_self
//= require routers/router
//= require models/searchItemModel
//= require models/senatorModel
//= require collections/searchItemCollection
//= require collections/senatorCollection
//= require views/searchItemListView
//= require views/searchItemView
//= require views/senatorListView
//= require views/senatorView
//= require views/formView
//= require_tree .

$(document).ready(function(){
  App.router = new App.Router();
  Backbone.history.start();
});

// no using, so removed the '=' sign:
// require models/search_item
// require views/list_view
// require views/search_item_profile_view


