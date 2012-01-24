
/**
 * Module dependencies.
 */

var express = require('express'),
          _ = require('underscore'),
   mongoose = require('mongoose'),
        sio = require('socket.io'),
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

/* @see - socket.io configuration */
var io = sio.listen(app)

io.configure('production', function(){
  io.set('log level', 1);

  io.set('transports', [
    'websocket'
  , 'flashsocket'
  , 'htmlfile'
  , 'xhr-polling'
  , 'jsonp-polling'
  ]);
});

io.configure('development', function(){
  io.enable('browser client etag');
  io.enable('browser client minification');
});

io.sockets.on('connection', function(socket){
  socket.on('/products/names', function (query,callback) {
   console.log('query: ', query);
   if(query) {
      products.findByName(query,function(err,data){
        if(err){
          callback({})
        }else{
          callback(data)
        }
      })
    } else {
      callback({})
    } 
  })
  
  socket.on('/calculation/add', function (recipe) {
    products.findById(recipe.id,function(err,item){
      
    // get from session
      socket.get('productsSet',function(err,productsSet){
        
        if(!productsSet) {
          productsSet = [];
        }
        
        if(item) {
          var amountInGrams = 0;
          switch (recipe.unit){
            case 'g': amountInGrams = recipe.amount;
            break;
            case 'dg': amountInGrams = recipe.amount * 10;
            break;
            case 'kg': amountInGrams = recipe.amount * 1000;
            break;
          }
          
          var data = {
            id: item._id,
            amount: amountInGrams,
            name: item.name,
            phe: item.phe*amountInGrams/100,
            proteins: item.proteins*amountInGrams/100,
            calories: item.calories*amountInGrams/100,
            fat: item.fat *amountInGrams/100,
            carbonhydrates: item.carbonhydrates *amountInGrams/100
          }
          
          productsSet.push(data);
        }
        
        // set into session
        socket.set('productsSet',productsSet)
        socket.emit('/calculation/table',productsSet)
      })
    })
  })
  
  socket.on('/calculation/delete',function( productId){
    console.log('Delete item: ', productId)
    socket.get('productsSet',function(err,productsSet){
      productsSet = _.reject(productsSet,function(item){
        return item.id == productId;
      })
      
      socket.set('productsSet',productsSet)
      socket.emit('/calculation/table',productsSet)
    })
  })
  
  socket.on('/calculation/clear',function(){
    socket.set('productsSet',[])
    socket.emit('/calculation/table',[])
  })
})

// Routes

/* @see - new routes added - simplified for presentation purposes */
app.get('/', function(req, res){
  res.render('index')
});

app.get('/calculation', function(req, res){
  res.render('calc', { products: req.session.productsSet } )
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
