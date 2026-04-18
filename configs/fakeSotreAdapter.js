const axios = require('axios');

const baseURL = 'https://fakestoreapi.com';

const apiClient = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'api-key': 'd5c1bb10cd5bbac723e1b7520584ed9b', 
    'secret-key': 'SK_642f49855df8532aafb9de2a31d792cd7ac2ab69612',
  },
});

//get all products
exports.getProducts = async (req, res) => {
  try {
    const response = await apiClient.get('/products');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } 
};

//get single product
exports.getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await apiClient.get(`/products/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create product
exports.createProduct = async (req, res) => {
  try {
    const response = await apiClient.post('/products', req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } 
};
