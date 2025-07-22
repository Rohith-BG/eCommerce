import express from "express";
import { createProduct, deleteProduct, getAllProducts, updateProduct } from "../controllers/productController.js";

const router = express.Router();

router.post('/',createProduct)

router.get('/',getAllProducts)

router.put('/',updateProduct)

router.delete('/',deleteProduct)

export default router;
