import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import cors from "cors";
app.use(cors({
    origin: 'http://localhost:4201'

}));
const port = process.env.PORT || 3001;
import { myDataSource } from "./app-data-source";
import productRouter from "./product/product.router";

app.use(express.json());
app.use('/api/products', productRouter);

app.listen(port, () => {
    console.log(`Alten-shop-back listening on port ${port}!`)

    // establish database connection
    myDataSource
        .initialize()
        .then(() => {
            console.log("Data Source has been initialized!")
        })
        .catch((err) => {
            console.error("Error during Data Source initialization:", err)
        })
});