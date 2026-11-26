
import express, { json } from "express";
import { firstRoute } from "./src/route/FirstRoute.js";
import { productRoute } from "./src/route/ProductRoute.js";
import { userRoute } from "./src/route/UserRoute.js";

console.log('Hello world')

/*
backend(express) attach port to it
*/
const PORT = 8000;
const app = express();

app.use(json());
app.use(firstRoute);
app.use("/product", productRoute);
app.use("/user", userRoute);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
