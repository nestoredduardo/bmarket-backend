const db = require('../../db');

const getResults = async (input) => {
  const products = await db.query(
    'SELECT * FROM product WHERE name LIKE %?%',
    [input]
  );

  return {
    products,
  };
};

module.exports = {
  getResults,
};
