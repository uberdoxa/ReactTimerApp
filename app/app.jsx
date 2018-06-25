 var React = require('react');
 var ReactDOM = require('react-dom');
 var {Route, Router,IndexRoute,hashHistory} = require('react-router');

var Main = require('Main');


// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')



ReactDOM.render(
   <Router history={hashHistory}>
   <Route path = '/' component={Main}>

   </Route>
   </Router>,
    document.getElementById('app')
  );


//61d10c4dc62e28ce7e833eed8e5f1d4c
//https://api.darksky.net/forecast/61d10c4dc62e28ce7e833eed8e5f1d4c/37.8267,-122.4233
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
//6b17e9067a4a972c2f9dd49bfaa2782a
// cheap-module-eval-source-map
// inline-source-map
// eval-source-map

