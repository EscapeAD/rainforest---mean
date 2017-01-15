const express     = require('express'),
      mongoose    = require('mongoose'),
      Product     = require('../models/product'),
      router      = express.Router();

mongoose.connect('mongodb://localhost/rainforest')

//
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


module.exports = router;
