const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sellerDb');
const schema = mongoose.schema;

var NewSellerSchema= new mongoose.Schema({
    sellers:String,
    fishes:String,
    availability:String,
    price:String,
    contact:String
});

var Sellerdata=mongoose.model('seller',NewSellerSchema);
module.exports= Sellerdata
