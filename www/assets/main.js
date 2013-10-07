require.config({
  baseUrl: 'assets',
  paths: {
    jquery: 'vendor/jquery-1.9.1',
    underscore: 'vendor/underscore',
    bootstrap: 'vendor/bootstrap',
    backbone: 'vendor/backbone',
    hoodie: 'vendor/hoodie'
  },

  shim: {
    'backbone': {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
    },
    'underscore': {
        exports: '_'
    },
    'hoodie': {
        deps: ['jquery'],
        exports: 'Hoodie'
    }
  }
});

require(['jquery', 'app'], function($, App){
  $(App.init);
});



// var AppRouter = Backbone.Router.extend({
//   routes: {
//     "track":      "track",    // #track
//     "history":    "history",  // #history
//     "about":      "about",    // #about
//   },

//   track: function() {
//     // ...
//   },

//   history: function(query, page) {
//     // ...
//   },

//   about: function(query, page) {
//     console.log(arguments);
//   }
// });

// $(function(){
//   var hoodie = new Hoodie()
//   var router = new AppRouter();

//   Backbone.history.start({pushState: true});
// });





// // // initial load of all todo items from the store
// // hoodie.store.findAll('todo').then( function(todos) {
// //   todos.sort( sortByCreatedAt ).forEach( addTodo )
// // })

// // // when a new todo gets stored, add it to the UI
// // hoodie.store.on('add:todo', addTodo)
// // // clear todo list when the get wiped from store
// // hoodie.account.on('signout', clearTodos)

// // // handle creating a new task
// // $('#todoinput').on('keypress', function(event) {
// //   if (event.keyCode == 13) { // ENTER
// //     hoodie.store.add('todo', {title: event.target.value});
// //     event.target.value = '';
// //   }
// // })

// // function addTodo( todo ) { 
// //   $('#todolist').append('<li>'+todo.title+'</li>');
// // }
// // function clearTodos() {
// //   $('#todolist').html('');
// // }
// // function sortByCreatedAt(a, b) { 
// //   return a.createdAt > b.createdAt
// // }
