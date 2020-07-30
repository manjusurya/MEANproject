const express=require('express');
const SellerData= require('./src/model/Sellerdata');
const SignupData= require('./src/model/Signupdata');
const SignupData1= require('./src/model/Signupdata1')
const cors= require ('cors');
var bodyparser=require('body-parser');
const { Router } = require('express');
var app=new express();
app.use(cors());
app.use(bodyparser.json())
app.get('/sellers',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    SellerData.find()
    .then(function(sellers){
        res.send(sellers    );
    });

});
app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);
    var data ={
        sellers: req.body.seller.sellers,
        fishes : req.body.seller.fishes,
        availability : req.body.seller.availability,
        price : req.body.seller.price,
        contact : req.body.seller.contact,
       

    }
    var seller = new SellerData(data);
    console.log(seller);
    seller.save();
    
});

app.post('/deleteSeller',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    const id=req.body.id;
    SellerData.deleteOne({_id:id})
    .then((sellers)=>{
        res.send('Deleted One Product');
    });

})
app.post('/EditSeller',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    var data ={
        sellers: req.body.item.sellers,
        fishes : req.body.item.fishes,
        availability : req.body.item.availability,
        price : req.body.item.price,
        contact : req.body.item.contact,
       

    }
    SellerData.updateOne({_id:req.body.item._id},{$set:{sellers:data.sellers,
        fishes:data.fishes,
        availability:data.availability,
        releaseDate:data.releaseDate,
        price:data.price,
        contact:data.contact}})
    

    .then((sellers)=>{
        res.send('Updated One Product');
    });

    

})

app.post('/seller',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    const id=req.body.id;
    SellerData.find({_id:id})
    .then(function(seller){
        res.send(seller);
    });

});
app.post('/signup',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);
    var data ={
        name: req.body.signup.name,
        email : req.body.signup.email,
        password : req.body.signup.password,
       
       

    }
    var signup = new SignupData(data);
    console.log(signup);
    signup.save();
    
});
app.post('/login',(req,res)=>{
    let login=req.body;
    email=login.login.email,
    password=login.login.password,
    console.log(req.body);
    console.log(email);
    console.log(password);
    console.log("logged in user");
    SignupData.findOne({email:email},(err,signup)=>{
        console.log(err);
        if(err){
            err.json('Invalid Login')
        }else if(!signup){res.json('User Not Found')}
        else{
            if(signup.email!==email){
                console.log('Invalid Email');
                res.json('Invalid Email')
            }else
            if(signup.password!==password){
                console.log('Invalid password');
                res.json('Invalid Password')
            }else{
                res.status(200).json(signup)
            }
        }
    });
})
app.post('/signup1',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);
    var data ={
        name: req.body.signup1.name,
        email : req.body.signup1.email,
        password : req.body.signup1.password,
       
       

    }
    var signup1 = new SignupData1(data);
    console.log(signup1);
    signup1.save();
    
});
app.post('/login1',(req,res)=>{
    let login1=req.body;
    email=login1.login1.email,
    password=login1.login1.password,
    console.log(req.body);
    console.log(email);
    console.log(password);
    console.log("logged in user");
    SignupData1.findOne({email:email},(err,signup1)=>{
        console.log(err);
        if(err){
            err.json('Invalid Login')
        }else if(!signup1){res.json('User Not Found')}
        else{
            if(signup1.email!==email){
                console.log('Invalid Email');
                res.json('Invalid Email')
            }else
            if(signup1.password!==password){
                console.log('Invalid Password');
                res.json('Invalid Password')
            }else{
                res.status(200).json(signup1)
            }
        }
    });
})

app.listen(3000,function(){
    console.log('listening to port 3000')
});