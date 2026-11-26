import { Router } from "express";
export const productRoute = Router();

productRoute
    .route("/")
    .get((req, res, next) => {
        console.log("this is Product"); // prints in the server terminal
        res.send("this is the Product");    // sent back to Postman
    })
    .post((req, res, next) => {
        console.log("Product posted successfully");
        console.log(req.body);
        res.send(`Product posted successfully`);
    })
    .patch((req, res, next) => {
        console.log("Product patched successfully");
        res.send("Product patched successfully");
    })
    .delete((req, res, next) => {
        console.log("Product deleted successfully");
        res.send("Product deleted successfully");
    });
productRoute
    .route("/:id")
    .get((req,res,next)=> {
        console.log(req.params);
        res.json("get2");
    })
    .post((req,res,next)=> {
        console.log(req.params);
        res.json("get2");
    })
    .delete((req,res,next)=> {
        console.log(req.params);
        res.json("get2");
    })
    .patch((req,res,next)=> {
        console.log(req.params);
        res.json("get2");
    })