var Userdb=require('../model/model');

// create and save new user

exports.create=(req,res)=>{
// validate request
if(!req.body){
    res.status(400).send({message:"content can not be empty!"});
    return;
}
// new user
const user=new Userdb({
    name:req.body.name,
    email:req.body.email,
    gender:req.body.gender,
    status:req.body.status
})

// save user data in database
.save(user)
.then(data=>{
    res.send(data)
})
.catch(err=>{
res.status(500).send({
    message:err.message || "some error occured while creating a create operaation"
});
});



}



// retrive and return all users/retrive and return a single user

exports.find=(req,res)=>{

}


// upadate a new identified user by user id

exports.update=(res,res)=>{

}




// delte a user with specified user id

exports.delete=(req,res)=>{

}