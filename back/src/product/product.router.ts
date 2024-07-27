import express, { Request, Response } from "express";
import { ProductService } from "./product.service";
import { checkProduct } from "./check-product";
const product = express.Router();
const productService = new ProductService();

// Find all
product.get('/', async (req: Request, res: Response) => {
    const products = await productService.getProducts();
    res.status(200).json(products);
});

// Find one
product.get('/:productId', (req: Request, res: Response) => {
    const { productId } = req.params;
    const product = productService.getProduct(parseInt(productId));
    res.status(200).json(product);
});

// Create
product.post('/',  checkProduct, async (req: Request, res: Response) => {
    const { product } = req.body;
    const createdProduct = await productService.createProduct(product);
    res.status(201).json(createdProduct);
});

// Update
product.put('/:productId', checkProduct, (req: Request, res: Response) => {
    const { productId } = req.params;
    const { product } = req.body;
    res.status(201).json(productService.updateProduct(Number(productId), product));
});

// Delete
product.delete('/:productId', (req: Request, res: Response) => {
    const { productId }= req.params;
    res.status(200).json(productService.deleteProduct(Number(productId)));
});


export default product;