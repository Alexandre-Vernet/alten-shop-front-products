import express, { Request, Response } from "express";
const product = express.Router();

product.get('/', (req: Request, res: Response) => {


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


export default { product };