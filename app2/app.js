
/**
 * Module dependencies.
 */

var express = require('express'),
          _ = require('underscore'),
   mongoose = require('mongoose'),
   products = require('./models/products')
   
   
var app = module.exports = express.createServer();

mongoose.connect('mongodb://localhost/pkuDB')

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
  res.render('calc', { products: req.session.productsSet } )
});


app.post('/calculation/add/:id', function(req, res){
  products.findById(req.param('id'),function(err,item){
    if(!req.session.productsSet) {
      req.session.productsSet = [];
    }
    
    if(item) {
      var amountInGrams = 0;
      switch (req.body.unit){
        case 'g': amountInGrams = req.body.amount;
        break;
        case 'dg': amountInGrams = req.body.amount * 10;
        break;
        case 'kg': amountInGrams = req.body.amount * 1000;
        break;
      }
      
      var data = {
        amount: amountInGrams,
        name: item.name,
        phe: item.phe*amountInGrams/100,
        proteins: item.proteins*amountInGrams/100,
        calories: item.calories*amountInGrams/100,
        fat: item.fat *amountInGrams/100,
        carbonhydrates: item.carbonhydrates *amountInGrams/100
      }
      
      console.log(data)
      req.session.productsSet.push(data);
    }//TODO add validation
    
    res.redirect('/calculation')
  })
});

app.get('/products/names', function(req, res){
  
  var query = req.param('term')
  if(query) {
    products
      .find({name: new RegExp(query,'i')})
      .select('name')
      .run(function(err,data){
        console.log('Model: ', products.modelName);
        if(err) {
          console.log('Hiuston we have a problem: ',err)
          res.statusCode = 500                                                                                                                                                      
          res.send(http.STATUS_CODES[res.statusCode])
        } else { 
          console.log('Data: ', data);
          res.send(data) 
        }
      })
  } else {
    res.send({})
  } 
})

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
