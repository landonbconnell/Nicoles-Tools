const express = require('express');
const router = express.Router();
const { requestAuthCode } = require('../controllers/kroger/authControllers.js');
const {
  searchByTerm,
  getProductById,
} = require('../controllers/kroger/productControllers.js');
const { getLocations } = require('../controllers/kroger/locationController.js');

router.get('/auth/requestAuthCode', requestAuthCode);

router.get('/products/search/:term', searchByTerm);
router.get('/products/:id', getProductById);

router.post('/locations/getLocations', getLocations);

module.exports = router;
