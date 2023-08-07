const express = require("express");
const app = express();

const orderModel = require("../models/orderModel");

app.route("/")
.get( async (req, res, next)=> {
    console.log("Running POST of /products...");
    try{
        const order = await orderModel.find({});
        res.status(200).json(order)
        console.log("Inside Try---GET of /products...");
    }catch(error){
        res.status(500).send(error);
        console.log("Inside Catch---GET of /products...");
    }
})
.post( async (req, res, next)=> {
    console.log("Running POST of /products...");
    try{
        const order = await orderModel.create(req.body);
        res.status(200).json(order)
        console.log("Inside Try---POST of /products...");
    }catch(error){
        res.status(500).send(error);
        console.log("Inside Catch---POST of /products...");
    }
    // res.send("Products Route ./products with POST request");
})

app.route("/:orderId")
.get( async (req, res, next)=> {
    console.log("Running GET of /products/:orderId...");
    try{
        const order = await orderModel.findById(req.params.orderId);
        res.status(200).json(order)
        console.log("Inside Try---GET of /products/:orderId...");
    }catch(error){
        res.status(500).send(error);
        console.log("Inside Catch---GET of /products/:orderId...");
    }
})
.delete( async (req, res, next)=> {
    console.log("Running DELETE of /products/:orderId...");
    try{
        const order = await orderModel.findByIdAndDelete(req.params.orderId);
        res.status(200).json(order)
        console.log("Inside Try---DELETE of /products/:orderId...");
    }catch(error){
        res.status(500).send(error);
        console.log("Inside Catch---DELETE of /products/:orderId...");
    }
})


module.exports = app;