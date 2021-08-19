const products = require('../components/products/network');

const routes = (server) => {
  server.routes('/product', products);
};

module.exports = routes;
