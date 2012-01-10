
/**
 * Module dependencies.
 */

var express = require('express')

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'your secret here' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

/* @see - set jade engine inherence available */
app.set('view options', { layout: false });

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

/* @see - new routes added - simplified for presentation purposes */
app.get('/', function(req, res){
  res.render('index')
});

app.get('/calculation', function(req, res){
  
/* @see - product table data model */  
  var products = [
    { name: 'Buła',count: '2 szt.', proteins: '23.2', phe: '100', carbonhydrates: '1000', fat: '10.4', calories: '200'},
    { name: 'Kasz',count: '1 kg.', proteins: '32', phe: '13', carbonhydrates: '312', fat: '50.2', calories: '300'}
  ]
  
  res.render('calc', { products: products } )
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
