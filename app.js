const express = require('express'),
          app = express(),
   bodyParser = require('body-parser'),
       routes = require('./routes/routes'),
       mysql  = require('mysql'),
       methodOverride = require('method-override'),
       path           = require('path');

app.use(bodyParser.urlencoded({extended: true}));




app.use(express.static('public'));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(routes); // we dont put the first parameter here '/', because its the default

app.listen(3000, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log('------------------\nApp has started.\n------------------')
  }
});       