import { Router } from "express";
export const productRoute = Router();

productRoute
    .route("/product")
    .get((req, res) => {
        console.log("this is product"); // prints in the server terminal
        res.send("this is the product");    // sent back to Postman
    })
    .post((req, res) => {
        console.log("product posted successfully");
        res.send("product posted successfully");
    })
    .patch((req, res) => {
        console.log(" Product patched successfully");
        res.send(" Product patched successfully");
    })
    .delete((req, res) => {
        console.log("Product deleted successfully");
        res.send("Product deleted successfully");
    });
