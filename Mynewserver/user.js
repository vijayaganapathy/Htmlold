var mongoose=require('mongoose');
var User=mongoose.model('users',{ //users is  a collection name

Name:{
    type:String
},
DOb:{
type:Number
}
})
module.exports={User}