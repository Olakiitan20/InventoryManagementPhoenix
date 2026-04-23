const express = require('express');
const router1 = express.Router();
const productController = require('../controllers/productController.js');

//bring in middleware
const { protect } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');

<<<<<<< HEAD
router1.use(protect)
=======
//router1.use(protect)
>>>>>>> 6d6b559329ebb165eada2c3e052e14e9987cbeb6

// ❗ No authentication here (as requested)
router1.post('/products', authorizeRoles('admin'), productController.createProduct);
router1.get('/products', authorizeRoles('salesperson'), productController.getProducts);
router1.get('/products/:id', productController.getProduct);
router1.put('/products/:id', productController.updateProduct);
router1.delete('/products/:id', productController.deleteProduct);
<<<<<<< HEAD
=======
router1.patch('/upload/:id', productController.updateProductImage);
router1.post('/createproductwithemail', productController.createProductwithEmail);


>>>>>>> 6d6b559329ebb165eada2c3e052e14e9987cbeb6

module.exports = router1;