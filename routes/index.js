var express = require('express');
var router = express.Router();
var csrf = require('csurf');

var Cart = require('../models/cart');
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

router.get('/add-to-cart/:id', function(req, res, next){
      var productId = req.params.id;
      var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

      Product.findById(productId, function(err, product){
        if(err){
          return res.redirect('/')
        }
        cart.add(product, productId);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/')
      });
});

router.get('/shopping-cart', function(req, res){
  if(!req.session.cart){
    return res.render('shop/shopping-cart', {products: null});
  }
  var cart = new Cart(req.session.cart);
  res.render('shop/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
})



module.exports = router;
