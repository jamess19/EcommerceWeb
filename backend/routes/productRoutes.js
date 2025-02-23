import express from 'express';
import { CreateNewProduct, DeleteProduct, GetAllProducts, GetProduct, UpdateProduct } from '../controllers/productController.js';

const router = express.Router();

// định nghĩa các routes cho product tại đây

router.get('/', GetAllProducts);
router.get('/:id', GetProduct);
router.post('/', CreateNewProduct);
router.put('/:id', UpdateProduct);
router.delete('/:id', DeleteProduct);
export default router;