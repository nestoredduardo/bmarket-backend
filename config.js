require('dotenv').config();

const config = {
  db: {
    port: process.env.PORT || 8000,
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    db_name: process.env.DB_NAME,
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
