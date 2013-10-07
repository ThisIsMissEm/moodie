define([
  "backbone",
  "jquery"
], function(Backbone, $){

  function open(id){
    var tabs = $('[data-tab]');

    tabs.hide();
    tabs.find('[data-tab="' + id + '"]').show();
  }

  return Backbone.Router.extend({
    routes: {
      "track":      "track",    // #track
      "history":    "history",  // #history
      "about":      "about",    // #about
    },

    initialize: function(){
      open("track");
    },

    track: function() {
      open("track");
    },

    history: function(query, page) {
      open("history");
    },

    about: function(query, page) {
      open("about");
    }
  });
});
