const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProductById,
  deleteAllProducts,
  getProductsByName,
} = require("../controllers/productController");

const router = express.Router();

router.get("/products", getAllProducts);              
router.get("/products/:id", getProductById);        
router.post("/products", createProduct);             
router.put("/products/:id", updateProduct);          
router.delete("/products/:id", deleteProductById);    
router.delete("/products", deleteAllProducts);        
router.get("/products", getProductsByName);           

module.exports = router;
