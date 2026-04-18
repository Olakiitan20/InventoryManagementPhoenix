const apiAdapter = require('../configs/fakeSotreAdapter');

//get all products
exports.getProducts = async (req, res) => {
    //save to database    
  await apiAdapter.getProducts(req, res);
};

//get single product
exports.getProduct = async (req, res) => {
  await apiAdapter.getProduct(req, res);
};      

//create product
exports.createProduct = async (req, res) => {
    const { title, price, description, category, image } = req.body;

    if (!title || !price || !description || !category || !image) {
        return res.status(400).json({ message: 'All fields are required' });
    }
  await apiAdapter.createProduct(req, res);
};