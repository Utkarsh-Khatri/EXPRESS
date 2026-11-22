import express from "express";
import { firstRoute } from "./src/route/FirstRoute.js";
import { productRoute } from "./src/route/ProductRoute.js";

console.log('Hello world')

/*
backend(express) attach port to it
*/
const PORT = 8000;
const app = express();

app.use(firstRoute);
app.use(productRoute);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
