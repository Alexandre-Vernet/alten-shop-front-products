import express from 'express';
import cors from 'cors';
import productRouter from "./product.router";

const router = express.Router();

router.use(cors({
    origin: 'http://localhost:4201'
}));

router.use('/products', () => productRouter)



export default router;