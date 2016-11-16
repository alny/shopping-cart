var express = require('express');
var router = express.Router();
var csrf = require('csurf');

var Product = require('../models/products');


var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {

  Product.find(function(err, products){
    if(err){
      throw err;
    }
    res.render('shop/index', { title: 'Shopping Cart', products: products });

  })

});



module.exports = router;
