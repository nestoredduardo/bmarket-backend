const products = require('../components/products/network');
const categories = require('../components/categories/network');
const search = require('../components/products/network');

const routes = (server) => {
  server.use('/products', products);
  server.use('/categories', categories);
  server.use('/search', search);
};

module.exports = routes;
