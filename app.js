const express = require("express");
const app= express();

const morgan = require("morgan");
app.use(morgan("dev"));


// CORS Handling
app.use((req, res, next)=>{
   res.header('Access-Control-Allow-Origin', "*");
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept, Authorization');

   if(req.method === 'OPTIONS'){
       res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');

       return res.status(200).json({});
   }

   // Dont forget to apply "next" method in this, because without this, after this methods route wouldn't run
   next();
})



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