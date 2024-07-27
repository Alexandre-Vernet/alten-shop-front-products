import { myDataSource } from "../app-data-source";
import { ProductEntity } from "./product-entity";
import { FindOneOptions } from "typeorm";

export class ProductService {

    async getProducts() {
        return await myDataSource.getRepository(ProductEntity).find();
    }

    async getProduct(productId: number) {
        const options: FindOneOptions = {
            where: { id: productId },
        }
        return await myDataSource.getRepository(ProductEntity).findOne(options);
    }

    async createProduct(product: ProductEntity) {
        return await myDataSource.getRepository(ProductEntity).save(product);
    }

    async updateProduct(product: ProductEntity) {
        return await myDataSource.getRepository(ProductEntity).save(product);
    }

    async deleteProduct(productId: number) {
        return await myDataSource.getRepository(ProductEntity).delete(productId);
    }
}