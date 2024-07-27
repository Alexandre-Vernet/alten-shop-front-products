import express from "express";
const app = express();
const port = process.env.PORT || 3001;
import router from "./router/router";
import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();
app.use(express.json());
app.use('/api', router);

app.listen(port, () => {
    console.log(`Alten-shop-back listening on port ${port}!`)
});