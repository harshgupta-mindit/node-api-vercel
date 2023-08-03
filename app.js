const express = require("express");
const app= express();

const morgan = require("morgan");
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const productRoute = require("./routes/productRoutes.js");
const orderRoute = require("./routes/orderRoutes.js");

app.get("/", (req, res, next) => {
   res.send("Home Route");
   console.log("Calling Home Route")

   next();
});

app.use("/products", productRoute);
app.use("/orders", orderRoute);

module.exports = app;