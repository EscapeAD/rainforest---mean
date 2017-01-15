const express     = require('express'),
      mongoose    = require('mongoose'),
      Product     = require('../models/product'),
      router      = express.Router();

mongoose.connect('mongodb://localhost/rainforest')

//ALL
router.get('/products', (req, res)=>{
  Product.find({}, (err, products)=>{
    if(err){
      console.log(err);
      res.send(err);
    } else {
      render.json(products);
    }
  })
})

//Show
router.get('/products/:id', (req, res)=>{
  Product.findById(req.params.id, (err, product)=>{
    if(err){
      console.log(err);
      res.send(err);
    } else {
      render.json(product);
    }
  })
})

//create
router.post('/products', (req, res)=>{
  let newProduct = req.body;
  Product.create(newProduct, (err, products)=>{
    if(err){
      console.log(err);
      res.send(err);
    } else {
      render.json(products);
    }
  })
})

//edit
router.put('/products/:id', (req, res)=>{
  let update = req.body;
  Product.findByIdAndUpdate(req.params.id, update, (err, product)=>{
    if(err){
      console.log(err);
      res.send(err);
    } else {
      render.json(product);
    }
  })
})

//destroy
router.delete('/products/:id', (req, res)=>{
  Product.findByIdAndRemove(req.params.id, (err, product)=>{
    if(err){
      console.log(err);
      res.send(err);
    } else {
      render.json(product);
    }
  })
})


module.exports = router;
