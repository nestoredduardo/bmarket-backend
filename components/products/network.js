const express = require('express');
const router = express.Router();

const controller = require('./controller');
const response = require('../../network/response');

router.get('/', (req, res) => {
  try {
    const page = req.query.page;
    const result = controller.getProducts(page);
    response.success(req, res, result, 200);
  } catch (error) {
    response.error(req, res, 'Hubo un error', 500, error);
  }
});

module.exports = router;
