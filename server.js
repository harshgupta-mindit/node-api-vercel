const http = require("http");
const app = require("./app");

const mongoose = require("mongoose");

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;



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
