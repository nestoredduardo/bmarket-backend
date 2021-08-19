const db = require('../../db');
const utils = require('../../utils');
const config = require('../../config');

const getProducts = async (page = 1) => {
  const offset = utils.getOffset(page, config.listPerPage);
  const rows = await db.query(`SELECT * FROM product LIMIT ?,?`, [
    offset,
    config.listPerPage,
  ]);

  const data = rows;
  const meta = { page };

  return {
    data,
    meta,
  };
};

module.exports = {
  getProducts,
};
