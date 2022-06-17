 





const express=require('express');
// const { model } = require("mongoose");
const route =express.Router()
const services=require('../services/render');
const controller=require('../controller/controller');
const { find } = require('../model/model');



// @description root routr
// @method GET

  route.get('/',services.homeRoutes)
    
// @description root routr/add-user
// @method GET/add_user

  
  route.get('/add-user',services.add_user)

// @description root routr/update-user
// @method GET/update -user

  route.get('/update-user',services.update_user )


  // API

  route.post('/api/users',controller.create);
  route.get('/api/users',controller.find);
  route.put('/api/users/:id',controller.update);
  route.delete('/api/users:id',controller.delete);
    


  module.exports=route