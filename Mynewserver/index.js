const express=require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
const app=express();
var cors=require('cors'); 
app.use(cors());
var{User}=require('./user');//user is user.js file name
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/Mydb',{useUnifiedTopology:true,useNewUrlParser: true});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/createuser',function(req, res){
console.log(req.body);
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
app.put('/updateuser/:id',function(req ,res){
    User.findById(req.params.id).then(function(userinfo){
        userinfo.DOb=100;
        userinfo.save().then(function(updatedata){
            console.log(updatedata);
            console.log("update success");
        }).catch(function(err){
            message:"error"
        })
    })
})
app.listen(3000);
