const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
    {
       name:{
        type: String,
        required: [true, "Name field is required"]
       },
       price: {
        type: Number,
        required: [true, "Quantity field is required"]
       },
       quantity: {
        type: Number,
        default: 0
       }
    },
    {
        timestamps: true
    }
)


const OrderModel = mongoose.model("gadget-shop-api-orders", OrderSchema);

module.exports=OrderModel;