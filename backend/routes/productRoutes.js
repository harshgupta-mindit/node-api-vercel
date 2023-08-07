const express = require("express");
const app = express();

const productModel = require("../models/productModel");

app.route("/")
.get( async (req, res, next)=> {
    console.log("Running POST of /products...");
    try{
        const product = await productModel.find({});

        const response = await product.map((doc)=> {
            return {
                id : doc._id,
                name: doc.name,
                price: doc.price,
                request:{
                    method: "GET",
                    URL: `http://localhost:3000/products/${doc._id}`
                }
            }
        })

        res.status(200).json(response)
        console.log("Inside Try---GET of /products...");
    }catch(error){
        res.status(500).send(error);
        console.log("Inside Catch---GET of /products...");
    }
})
.post( async (req, res, next)=> {
    console.log("Running POST of /products...");
    try{
        const product = await productModel.create(req.body);
        res.status(200).json(product)
        console.log("Inside Try---POST of /products...");
    }catch(error){
        res.status(500).send(error);
        console.log("Inside Catch---POST of /products...");
    }
    // res.send("Products Route ./products with POST request");
})

app.route("/:productId")
.get( async (req, res, next)=> {
    console.log("Running GET of /products/:productId...");
    try{
        const product = await productModel.findById(req.params.productId);
        res.status(200).json(product)
        console.log("Inside Try---GET of /products/:productId...");
    }catch(error){
        res.status(500).send(error);
        console.log("Inside Catch---GET of /products/:productId...");
    }
})
.put( async (req, res, next)=> {
    console.log("Running UPDATE of /products/:productId...");
    try{
        const product = await productModel.findByIdAndUpdate(req.params.productId, req.body);
        res.status(200).json(product)
        console.log("Inside Try---UPDATE of /products/:productId...");
    }catch(error){
        res.status(500).send(error);
        console.log("Inside Catch---UPDATE of /products/:productId...");
    }
})
.delete( async (req, res, next)=> {
    console.log("Running DELETE of /products/:productId...");
    try{
        const product = await productModel.findByIdAndDelete(req.params.productId);
        res.status(200).json(product)
        console.log("Inside Try---DELETE of /products/:productId...");
    }catch(error){
        res.status(500).send(error);
        console.log("Inside Catch---DELETE of /products/:productId...");
    }
})


module.exports = app;