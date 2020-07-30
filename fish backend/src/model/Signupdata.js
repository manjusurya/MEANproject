const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sellerDb');
const schema = mongoose.schema;

var NewSignupSchema= new mongoose.Schema({
     name:String,
     email:String,
     password:String
});

var Signupdata=mongoose.model('signup',NewSignupSchema);
module.exports= Signupdata
