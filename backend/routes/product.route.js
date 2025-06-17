import express from 'express';
import { CreateProduct, DeleteProduct, getProducts, updateProduct } from '../controllers/product.controller.js';
const router=express.Router();

router.post("/",CreateProduct);
router.get("/",getProducts);
router.put("/:id",updateProduct);
router.delete('/:id',DeleteProduct);

export default router;  