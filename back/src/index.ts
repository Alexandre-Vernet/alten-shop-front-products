import express from "express";
const app = express();
const port = 3001;
import router from "./router/router";
import mysql from "mysql";
app.use(express.json());
app.use('/api', router);

app.listen(port, () => {
    console.log(`Alten-shop-back listening on port ${port}!`)
});