const products = require('../components/products/network');

const routes = (server) => {
  server.use('/product', products);
};

module.exports = routes;
