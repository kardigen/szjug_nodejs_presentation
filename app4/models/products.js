
var mongoose = require('mongoose'),                                                                                                                                          
      Schema = mongoose.Schema;

var Products = new Schema({
  name          : {type: String},
  proteins      : {type: Number},
  phe           : {type: Number},
  carbonhydrates: {type: Number},
  fat           : {type: Number},
  calories      : {type: Number}
});

Products.static('findByName', function(namePattern,callback){
  this.find({name: new RegExp(namePattern,'i')})
    .select('name')
    .run(callback)
})

mongoose.model('products', Products)                                                                                                                                                 
module.exports = mongoose.model('products')
