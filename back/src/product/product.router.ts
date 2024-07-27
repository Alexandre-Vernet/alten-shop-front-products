import express, { Request, Response } from "express";
import { ProductService } from "./product.service";
const product = express.Router();
const productService = new ProductService();

product.get('/', async (req: Request, res: Response) => {
    const products = await productService.getProducts();
    console.log(products)
    res.json(products);
});

product.get('/:uid', (req: Request, res: Response) => {


});




// Create
product.post('/', (req: Request, res: Response) => {

});





// Update
product.put('/:productId', (req: Request, res: Response) => {
    const { user } = req.body;

});

// Delete
product.delete('/:productId', (req: Request, res: Response) => {


});


export default product;