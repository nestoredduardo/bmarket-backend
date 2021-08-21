const db = require('../../db');

const getResults = async (input) => {
  const products = await db.query(
    'SELECT * FROM product WHERE CHARINDEX( ? , name) > 0',
    [input]
  );

  return {
    products,
  };
};

module.exports = {
  getResults,
};
