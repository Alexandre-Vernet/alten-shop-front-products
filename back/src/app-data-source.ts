import { DataSource } from "typeorm";
import dotenv from "dotenv";

const {MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE} = process.env;
dotenv.config();

export const myDataSource = new DataSource({
    type: "mysql",
    host: MYSQL_HOST,
    port: Number(MYSQL_PORT),
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    entities: [
        "src/product/product-entity.ts",
        "dist/product/product-entity.js",
    ],
    logging: true,
    synchronize: true,
})