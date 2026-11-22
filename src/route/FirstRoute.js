import { Router } from "express";
export const firstRoute = Router();

firstRoute
    .route("/")
    .get((req, res) => {
        console.log("this is get method"); // prints in the server terminal
        res.send("this is get method");    // sent back to Postman
    })
    .post((req, res) => {
        console.log("this is post method");
        res.send("this is post method");
    })
    .patch((req, res) => {
        console.log("this is patch method");
        res.send("this is patch method");
    })
    .delete((req, res) => {
        console.log("this is delete method");
        res.send("this is delete method");
    });
