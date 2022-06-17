const mongoose=require('mongoose');
var schema=new mongoose.schema({
    name:{
        type:String,
    required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        status:true
    }
})



const Userdb=mongoose.model('userdb',schema);

module.exports=Userdb;