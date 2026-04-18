const fakeStoreController = require('../controllers/fakeStoreController');
const authMiddleware = require('../middleware/authMiddleware');
const express = require('express');
const router = express.Router();

router.get('/products', fakeStoreController.getProducts);
router.get('/products/:id', fakeStoreController.getProduct);
router.post('/products', fakeStoreController.createProduct);

module.exports = router;