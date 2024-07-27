import { Request, Response, NextFunction } from 'express';
import { Product } from "./product";

export const checkProduct = (req: Request, res: Response, next: NextFunction) => {
    const product: Product = req.body['product'];

    if (!product.name || !product.description || !product.inventoryStatus || !product.image) {
        return res.status(400).json({ error: 'All properties are required' });
    }

    const authorizedStockValues = ['INSTOCK', 'OUTOFSTOCK', 'LOWSTOCK'];
    if (!authorizedStockValues.includes(product.inventoryStatus)) {
        return res.status(400).json({ error: 'Stock value not authorized' });
    }

    if (product.price < 0) {
        return res.status(400).json({ error: 'Price cannot be negative' });
    }

    if (product.rating < 0 || product.rating > 5) {
        return res.status(400).json({ error: 'Rating must be between 0 and 5' });
    }

    if (product.quantity < 0) {
        return res.status(400).json({ error: 'Quantity cannot be negative' });
    }

    if (!product.image.endsWith('.jpg') && !product.image.endsWith('.png')) {
        return res.status(400).json({ error: 'Image must be a jpg or png file' });
    }

    next();
};
