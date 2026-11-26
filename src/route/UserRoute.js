import { Router } from "express";
export const userRoute = Router();

userRoute
    .route("/")
    .get((req, res) => {
        console.log("this is user get method"); // prints in the server terminal
        res.send("this is user get method");    // sent back to Postman
    })
    .post((req, res) => {
        console.log("this is user post method");
        console.log(req.body);
        res.send("this is user post method");
    })
    .patch((req, res) => {
        console.log("this is user patch method");
        res.send("this is user patch method");
    })
    .delete((req, res) => {
        console.log("this is user delete method");
        res.send("this is user delete method");
    });
