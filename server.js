const http = require("http");
const app = require("./app");

const mongoose = require("mongoose");

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;


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


mongoose.connect("mongodb+srv://harshgupta:nxOkklv3TdiYtWPv@node-rest-shop.pwcnuwr.mongodb.net/gadget-shop-api?retryWrites=true&w=majority")
.then(()=> {
    console.log("MongoDB connected, Collection : gadget-shop-api");
    server.listen(PORT, ()=> {
        console.log(`Server Running with port : http://localhost:${PORT}`);
    });
})
.catch((err)=> {
    console.log(err);
})
