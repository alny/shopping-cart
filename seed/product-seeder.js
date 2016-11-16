var Product = require('../models/products');

var mongoose = require('mongoose');
mongoose.connect('localhost/shopping');


var products = [
new Product({
  imagePath: 'https://d13yacurqjgara.cloudfront.net/users/1439523/screenshots/3087720/32313_1x.jpg',
  title: 'Peaceful 1',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 10
}),
new Product({
  imagePath: 'https://d13yacurqjgara.cloudfront.net/users/1439523/screenshots/3087720/32313_1x.jpg',
  title: 'Peaceful 2',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 105
}),
new Product({
  imagePath: 'https://d13yacurqjgara.cloudfront.net/users/1439523/screenshots/3087720/32313_1x.jpg',
  title: 'Peaceful 3',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 10
}),
new Product({
  imagePath: 'https://d13yacurqjgara.cloudfront.net/users/1439523/screenshots/3087720/32313_1x.jpg',
  title: 'Peaceful 4',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 19
}),
new Product({
  imagePath: 'https://d13yacurqjgara.cloudfront.net/users/1439523/screenshots/3087720/32313_1x.jpg',
  title: 'Peaceful',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 12
}),
new Product({
  imagePath: 'https://d13yacurqjgara.cloudfront.net/users/1439523/screenshots/3087720/32313_1x.jpg',
  title: 'Peaceful 7',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  price: 90
}),

];
var done = 0;

for(var i = 0; i < products.length; i++){
  products[i].save(function(err, result){
    done++;
    if(done === products.length){
      exit();
    }
  });
}

function exit(){
  mongoose.disconnect();  
}
