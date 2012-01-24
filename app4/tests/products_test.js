var vows    = require('vows'),
  assert    = require('assert'),
  mongoose  = require('mongoose'),
  Products  = require('../models/products')
    
var suite = vows.describe('Products model')

suite.addBatch({
  'Connect DB':{
    topic:function(){
      mongoose.connect('mongodb://localhost/testDB', this.callback)
    },
    'connected!':function(err){
      assert.ifError(err)
    }
  }
})
suite.addBatch({
  'Drop DB':{
    topic:function(){
      var that = this;
      mongoose.connection.db.executeDbCommand( {dropDatabase:1},function(err){
        that.callback(err)
      }) 
    },
    'droped!':function(err){
      assert.ifError(err)
    }
  }
})
.addBatch({  
  'Create product Marchewka':{
    topic:function(){
      var that = this;
      new Products({
        name: 'Marchewka',
        phe: 10,
        proteins: 20,
        calories: 30,
        fat: 40,
        carbonhydrates: 50
      }).save(function(err){
        that.callback(err)
      })
    },
    'created!':function(err){
      assert.ifError(err)
    }
  },
  
  'Create product Ser gołda':{
    topic:function(){
      var that = this;
      new Products({
        name: 'Ser gołda',
        phe: 100,
        proteins: 200,
        calories: 300,
        fat: 400,
        carbonhydrates: 500
      }).save(function(err){
        that.callback(err)
      })
    },
    'created!':function(err){
      assert.ifError(err)
    }
  },
  
  'Create product Serowa nalewka':{
    topic:function(){
      var that = this;
      new Products({
        name: 'Serowa nalewka',
        phe: 1000,
        proteins: 2000,
        calories: 3000,
        fat: 4000,
        carbonhydrates: 5000
      }).save(function(err){
        that.callback(err)
      })
    },
    'created!':function(err){
      assert.ifError(err)
    }
  }
})
.addBatch({  
  'Query Marchewka':{
    topic:function(){
      var that = this;
      Products.findByName('Marchewka', function(err,data){
        that.callback(err,data)
      })
    },
    'Query success!':function(err,data){
      assert.ifError(err)
    },
    'Query returns one element':function(err,data){
      assert.equal(data.length,1)
    }
  },
  'Query ser':{
    topic:function(){
      var that = this;
      Products.findByName('ser', function(err,data){
        that.callback(err,data)
      })
    },
    'Query success!':function(err,data){
      assert.ifError(err)
    },
    'Query returns two elements':function(err,data){
      assert.equal(data.length,2)
    }
  },
  'Query wka':{
    topic:function(){
      var that = this;
      Products.findByName('wka', function(err,data){
        that.callback(err,data)
      })
    },
    'Query success!':function(err,data){
      assert.ifError(err)
    },
    'Query returns two elements':function(err,data){
      assert.equal(data.length,2)
    }
  }
})
.addBatch({
  'Drop DB':{
    topic:function(){
      var that = this;
      mongoose.connection.db.executeDbCommand( {dropDatabase:1},function(err){
        that.callback(err)
      }) 
    },
    'droped!':function(err){
      assert.ifError(err)
    }
  }
}).export(module);
