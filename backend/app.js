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




const users = [
   {
      id:1,
      name: "user 1"
   },
   {
      id:2,
      name: "user 2"
   },
   {
      id:3,
      name: "user 3"
   },
   {
      id:4,
      name: "user 4"
   },
   {
      id:5,
      name: "user 5"
   },
   {
      id:6,
      name: "user 6"
   },
   {
      id:7,
      name: "user 7"
   },
   {
      id:8,
      name: "user 8"
   },
   {
      id:9,
      name: "user 9"
   },
   {
      id:10,
      name: "user 10"
   },
   {
      id:11,
      name: "user 11"
   },
   {
      id:12,
      name: "user 12"
   },
   {
      id:13,
      name: "user 13"
   },
   {
      id:14,
      name: "user 14"
   },
]


app.get("/usersPagination", (req, res)=> {
   const page = req.query.page;
   const limit = req.query.limit;

   const startIdx = ( page - 1 ) *limit;
   const endIdx = page * limit;
      
   const results = {};
   
   results.results = users.slice(startIdx, endIdx);

   results.prevPage = users.slice((page-2)*limit, (page-1)*limit);
   results.nextPage = users.slice((page)*limit, (page+1)*limit);
   
   res.json(results);
})

module.exports = app;