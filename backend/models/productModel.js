const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
       name:{
        type: String,
        required: [true, "Name field is required"]
       },
       price: {
        type: Number,
        required: [true, "Quantity field is required"]
       }
    },
    {
        timestamps: true
    }
)

const productModel = mongoose.model("gadget-shop-api", ProductSchema);

module.exports=productModel;