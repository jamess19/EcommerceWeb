import express from 'express';
import { CreateNewProduct, GetAllProducts } from '../controllers/productController';

const router = express.Router();

// định nghĩa các routes cho product tại đây

router.get('/', GetAllProducts);
router.post('/', CreateNewProduct);

export default router;