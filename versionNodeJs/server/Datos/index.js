var express = require('express')
var Storage = require('../Storage')
var Router = express.Router()

Router.get('/bienes', function(req, res){
  //get Usuario
  Storage.getData('bienes')
         .then(function(users){
           res.json(users)
         }).catch(function(error){
           res.sendStatus(500).json(error)
         })
})

/*Router.get('/messages', function(req, res){
  //get Messages
  Storage.getData('messages')
         .then(function(messages){
           res.json(messages)
         }).catch(function(error){
           res.sendStatus(500).json(error)
         })
})*/

/*Router.post('/users', function(req, res){
  //post Usuario
  var user = req.body//.nombre
  console.log(req.body);
  Storage.getData('users')
         .then(function(users){
           return new Promise(function(resolve, reject){
             Storage.saveData('users', user, users)
                    .then(function(message){
                      resolve(message)
                    }).catch(function(err){
                      reject(err)
                    })
           }).then(function(message){
             res.json(message)
           }).catch(function(err){
             res.sendStatus(500).json(err)
           })
         })
})*/

/*Router.post('/messages', function(req, res){
  //post Messages
  var message = req.body.message
  Storage.getData('messages')
         .then(function(message){
           return new Promise(function(resolve, reject){
             Storage.saveData('users', message, messages)
                    .then(function(message){
                      resolve(message)
                    }).catch(function(err){
                      reject(err)
                    })
           }).then(function(message){
             res.json(message)
           }).catch(function(err){
             res.sendStatus(500).json(err)
           })
         })
})*/

module.exports = Router
