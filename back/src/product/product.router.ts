import express, { Request, Response } from "express";
import { ProductService } from "./product.service";
const product = express.Router();
const productService = new ProductService();

// Find all
product.get('/', async (req: Request, res: Response) => {
    const products = await productService.getProducts();
    res.json(products);
});

// Find one
product.get('/:productId', (req: Request, res: Response) => {
    const { productId } = req.params;
    const product = productService.getProduct(parseInt(productId));
    res.json(product);
});

// Create
product.post('/', async (req: Request, res: Response) => {
    const { product } = req.body;
    const createdProduct = await productService.createProduct(product);
    res.status(201).json(createdProduct);
});

// Update
product.put('/:productId', (req: Request, res: Response) => {
    const { productId } = req.params;
    const { product } = req.body;
    console.log(product)
    res.json(productService.updateProduct(Number(productId), product));
});

// Delete
product.delete('/:productId', (req: Request, res: Response) => {
    const { productId }= req.params;
    res.json(productService.deleteProduct(Number(productId)));
});


export default product;