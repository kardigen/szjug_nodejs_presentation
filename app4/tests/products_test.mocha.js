var 
  assert    = require('assert'),
  mongoose  = require('mongoose'),
  Products  = require('../models/products')
  
describe('Test', function(){
  before(function(){
    mongoose.connect('mongodb://localhost/testDB')
    mongoose.connection.db.executeDbCommand( {dropDatabase:1},function(){})
    new Products({
        name: 'Marchewka',
        phe: 10,
        proteins: 20,
        calories: 30,
        fat: 40,
        carbonhydrates: 50
      }).save() 
    new Products({
        name: 'Ser gołda',
        phe: 100,
        proteins: 200,
        calories: 300,
        fat: 400,
        carbonhydrates: 500
      }).save()
    new Products({
        name: 'Serowa nalewka',
        phe: 1000,
        proteins: 2000,
        calories: 3000,
        fat: 4000,
        carbonhydrates: 5000
      }).save()
  })
  
  describe('Query Marchewka', function(){
    it('returns without error', function(done){
      Products.findByName('Marchewka', function(err,data){
        if(err) done(err)
        done()
      })
    })
  })
  
  
  after(function(){
    mongoose.connection.db.executeDbCommand({dropDatabase:1})
  })
})