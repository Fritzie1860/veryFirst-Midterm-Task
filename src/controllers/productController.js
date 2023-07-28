// src/controllers/productController.js
const Product = require('../models/Product');

// Get a list of products related to a video
const getProductsByVideo = async (req, res) => {
  try {
    const video_id = req.params.video_id;
    const products = await Product.find({ video_id }, '_id product_id link_product price title').exec();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Unable to fetch products.' });
  }
};

module.exports = {
  getProductsByVideo,
};
