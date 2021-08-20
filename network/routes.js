const products = require('../components/products/network');
const categories = require('../components/categories/network');

const routes = (server) => {
  server.use('/products', products);
  server.use('/categories', categories);
};

module.exports = routes;
