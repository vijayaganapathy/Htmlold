const express=require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
const app=express();
var{User}=require('./user');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/mydb');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.post('/createuser',function(req, res){
Console.log(req.body);
var userinfo=req.body;
var user=new User(userinfo);
user.save().then(function(data){
    res.json({
        message:"success"
    })
}).catch(function(err){
    res.status(500).json({
        message:"error"
    })
})
});
app.get('/getuser',function(req, res){
    User.find().then(function(userinfo){
        res.json(userinfo)
    }).catch(function(err){
        res.status(500).json({
            message:"error"
        })
    })
})
app.listen(3000);



const express = require('express')
const app = express()
var mongoose = require('mongoose');
var bodyParser1=require('body-parser');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/Mydb',{useUnifiedTopology:true,useNewUrlParser: true});
app.get('/getdata', function (req, res) {
    res.json(
     [
         {
           "id": "12",
           "name": "Lura Senger",
           "email": "Xander_Collier@yahoo.com"
         },
         {
           "id": "2",
           "name": "Wilburn Weber",
           "email": "Bennett_Kreiger11@yahoo.com"
         }
       ]
    );
 });
 app.listen(3000);
 