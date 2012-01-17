
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

mongoose.model('Products', Products)                                                                                                                                                 
module.exports = mongoose.model('Products')
